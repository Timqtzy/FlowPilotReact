import { NextRequest } from 'next/server';
import clientPromise from './mongodb';

export interface RateLimitConfig {
  windowMs: number;        // Time window in milliseconds
  maxRequests: number;     // Maximum requests per window
  message?: string;        // Custom error message
  statusCode?: number;     // Custom status code
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  resetTime: Date;
  retryAfter?: number;
}

export class RateLimiter {
  private config: RateLimitConfig;

  constructor(config: RateLimitConfig) {
    this.config = {
      message: 'Too many requests, please try again later.',
      statusCode: 429,
      ...config
    };
  }

  async checkLimit(request: NextRequest): Promise<RateLimitResult> {
    try {
      const client = await clientPromise;
      const db = client.db('flowpilot');
      const collection = db.collection('rate_limits');

      // Get client IP address
      const ip = this.getClientIP(request);
      const now = new Date();
      const windowStart = new Date(now.getTime() - this.config.windowMs);

      // Clean up old entries
      await collection.deleteMany({
        ip,
        timestamp: { $lt: windowStart }
      });

      // Count requests in current window
      const requestCount = await collection.countDocuments({
        ip,
        timestamp: { $gte: windowStart }
      });

      if (requestCount >= this.config.maxRequests) {
        // Rate limit exceeded
        const oldestRequest = await collection.findOne(
          { ip, timestamp: { $gte: windowStart } },
          { sort: { timestamp: 1 } }
        );

        const resetTime = new Date(oldestRequest.timestamp.getTime() + this.config.windowMs);
        const retryAfter = Math.ceil((resetTime.getTime() - now.getTime()) / 1000);

        return {
          success: false,
          limit: this.config.maxRequests,
          remaining: 0,
          resetTime,
          retryAfter
        };
      }

      // Record this request
      await collection.insertOne({
        ip,
        timestamp: now,
        userAgent: request.headers.get('user-agent') || 'unknown',
        endpoint: request.nextUrl.pathname
      });

      return {
        success: true,
        limit: this.config.maxRequests,
        remaining: this.config.maxRequests - requestCount - 1,
        resetTime: new Date(now.getTime() + this.config.windowMs)
      };

    } catch (error) {
      console.error('Rate limiting error:', error);
      // If rate limiting fails, allow the request (fail open for safety)
      return {
        success: true,
        limit: this.config.maxRequests,
        remaining: this.config.maxRequests - 1,
        resetTime: new Date(Date.now() + this.config.windowMs)
      };
    }
  }

  private getClientIP(request: NextRequest): string {
    // Check for forwarded headers (when behind proxy/load balancer)
    const forwarded = request.headers.get('x-forwarded-for');
    if (forwarded) {
      return forwarded.split(',')[0].trim();
    }

    // Check for real IP header
    const realIP = request.headers.get('x-real-ip');
    if (realIP) {
      return realIP;
    }

    // Fallback to connection remote address
    return request.ip || 'unknown';
  }

  async cleanup(): Promise<void> {
    try {
      const client = await clientPromise;
      const db = client.db('flowpilot');
      const collection = db.collection('rate_limits');
      
      // Remove entries older than 24 hours
      const cutoff = new Date(Date.now() - (24 * 60 * 60 * 1000));
      await collection.deleteMany({ timestamp: { $lt: cutoff } });
    } catch (error) {
      console.error('Rate limit cleanup error:', error);
    }
  }
}

// Pre-configured rate limiters for different endpoints
export const rateLimiters = {
  // Exchange rates API: 100 requests per hour
  exchangeRates: new RateLimiter({
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 100,
    message: 'Exchange rate API rate limit exceeded. Please try again in an hour.'
  }),

  // Config API: 10 requests per hour (admin operations)
  config: new RateLimiter({
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 10,
    message: 'Configuration API rate limit exceeded. Please try again in an hour.'
  }),

  // General API: 1000 requests per hour
  general: new RateLimiter({
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 1000,
    message: 'API rate limit exceeded. Please try again in an hour.'
  })
};

// Helper function to apply rate limiting to API routes
export async function applyRateLimit(
  request: NextRequest,
  limiter: RateLimiter = rateLimiters.general
) {
  const result = await limiter.checkLimit(request);
  
  if (!result.success) {
    return {
      blocked: true,
      result,
      response: new Response(
        JSON.stringify({
          success: false,
          error: limiter.config.message,
          rateLimit: {
            limit: result.limit,
            remaining: result.remaining,
            resetTime: result.resetTime,
            retryAfter: result.retryAfter
          }
        }),
        {
          status: limiter.config.statusCode,
          headers: {
            'Content-Type': 'application/json',
            'X-RateLimit-Limit': result.limit.toString(),
            'X-RateLimit-Remaining': result.remaining.toString(),
            'X-RateLimit-Reset': result.resetTime.toISOString(),
            'Retry-After': result.retryAfter?.toString() || '3600'
          }
        }
      )
    };
  }

  return {
    blocked: false,
    result,
    response: null
  };
}
