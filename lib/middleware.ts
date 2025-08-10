import { NextRequest, NextResponse } from 'next/server';
import { applyRateLimit, rateLimiters } from './rate-limit';

/**
 * Next.js Middleware for applying rate limiting
 * This runs before any API route and can provide additional protection
 * 
 * Note: This is optional - rate limiting is already applied in individual API routes
 * Use this if you want additional protection at the middleware level
 */

export async function middleware(request: NextRequest) {
  // Only apply to API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    // Determine which rate limiter to use based on the endpoint
    let limiter = rateLimiters.general;
    
    if (request.nextUrl.pathname.startsWith('/api/exchange-rates')) {
      if (request.nextUrl.pathname.includes('/config')) {
        limiter = rateLimiters.config;
      } else {
        limiter = rateLimiters.exchangeRates;
      }
    }

    // Apply rate limiting
    const rateLimitResult = await applyRateLimit(request, limiter);
    
    if (rateLimitResult.blocked) {
      return rateLimitResult.response;
    }

    // Add rate limit headers to successful responses
    const response = NextResponse.next();
    
    if (rateLimitResult.result) {
      response.headers.set('X-RateLimit-Limit', rateLimitResult.result.limit.toString());
      response.headers.set('X-RateLimit-Remaining', rateLimitResult.result.remaining.toString());
      response.headers.set('X-RateLimit-Reset', rateLimitResult.result.resetTime.toISOString());
    }

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
};
