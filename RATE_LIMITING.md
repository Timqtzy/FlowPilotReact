# Rate Limiting System

This document explains the rate limiting implementation for the FlowPilot API endpoints.

## Overview

The rate limiting system uses MongoDB to track requests per IP address with a sliding window approach. It's designed to protect against abuse while maintaining good performance.

## Features

- **Sliding Window**: Uses a sliding time window instead of fixed buckets for more accurate rate limiting
- **IP-based Tracking**: Tracks requests by client IP address
- **Configurable Limits**: Different endpoints can have different rate limits
- **Automatic Cleanup**: Old rate limit records are automatically cleaned up
- **Fail-safe**: If rate limiting fails, requests are allowed (fail open for safety)
- **Headers**: Returns standard rate limit headers for client information

## Configuration

### Default Rate Limits

| Endpoint | Window | Max Requests | Description |
|----------|--------|--------------|-------------|
| `/api/exchange-rates` | 1 hour | 100 | Exchange rate API |
| `/api/exchange-rates/config` | 1 hour | 10 | Configuration API (admin) |
| General | 1 hour | 1000 | Fallback for other endpoints |

### Customizing Rate Limits

You can modify the rate limits in `lib/rate-limit.ts`:

```typescript
export const rateLimiters = {
  exchangeRates: new RateLimiter({
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 100,           // 100 requests per hour
    message: 'Custom error message'
  }),
  // ... other limiters
};
```

## How It Works

1. **Request Tracking**: Each API request is recorded with IP, timestamp, user agent, and endpoint
2. **Window Calculation**: A sliding window is calculated based on the current time minus the window size
3. **Cleanup**: Old entries outside the window are automatically removed
4. **Limit Check**: Current request count is compared against the maximum allowed
5. **Response**: If limit exceeded, returns 429 status with rate limit headers

## Rate Limit Headers

When rate limiting is active, the following headers are returned:

- `X-RateLimit-Limit`: Maximum requests allowed in the window
- `X-RateLimit-Remaining`: Remaining requests in the current window
- `X-RateLimit-Reset`: When the rate limit will reset
- `Retry-After`: Seconds to wait before retrying

## Error Response

When rate limit is exceeded:

```json
{
  "success": false,
  "error": "Exchange rate API rate limit exceeded. Please try again in an hour.",
  "rateLimit": {
    "limit": 100,
    "remaining": 0,
    "resetTime": "2024-01-15T10:00:00.000Z",
    "retryAfter": 3600
  }
}
```

## IP Address Detection

The system tries to detect the real client IP address in this order:

1. `X-Forwarded-For` header (for proxy/load balancer setups)
2. `X-Real-IP` header
3. Connection remote address
4. Falls back to "unknown" if none available

## Cleanup

### Automatic Cleanup

Old rate limit records are automatically cleaned up:
- Records older than 24 hours are removed during rate limit checks
- This prevents the database from growing indefinitely

### Manual Cleanup

You can manually clean up old records:

```bash
npm run cleanup:rate-limits
```

Or run the script directly:

```bash
node scripts/cleanup-rate-limits.js
```

### Scheduled Cleanup

For production environments, consider setting up a cron job:

```bash
# Clean up every hour
0 * * * * cd /path/to/your/app && npm run cleanup:rate-limits

# Or clean up daily at 2 AM
0 2 * * * cd /path/to/your/app && npm run cleanup:rate-limits
```

## Monitoring

### Database Collections

- `rate_limits`: Stores rate limit records
- `exchange_rates`: Exchange rate data
- `exchange_rate_config`: Configuration settings

### Logs

Rate limiting activities are logged to the console:
- Rate limit exceeded events
- Cleanup operations
- Errors (with fail-safe behavior)

## Security Considerations

1. **Fail Open**: If rate limiting fails, requests are allowed to prevent service disruption
2. **IP Spoofing**: The system uses multiple headers to detect real IP addresses
3. **Database Protection**: Rate limit records are automatically cleaned up to prevent storage issues
4. **Configurable Limits**: Different endpoints can have appropriate limits based on their purpose

## Troubleshooting

### Common Issues

1. **Rate limits too strict**: Adjust the `maxRequests` value in the limiter configuration
2. **IP detection issues**: Check if your proxy/load balancer is setting the correct headers
3. **Database growth**: Ensure the cleanup script is running regularly

### Debug Mode

To debug rate limiting, you can add logging to the `checkLimit` method in `lib/rate-limit.ts`:

```typescript
async checkLimit(request: NextRequest): Promise<RateLimitResult> {
  const ip = this.getClientIP(request);
  console.log(`Rate limit check for IP: ${ip}`);
  // ... rest of the method
}
```

## Performance Impact

- **Minimal**: Rate limiting adds minimal overhead to API requests
- **MongoDB Queries**: Each request requires 2-3 database operations
- **Cleanup**: Automatic cleanup happens during rate limit checks
- **Scaling**: The system scales with your MongoDB performance

## Future Enhancements

Potential improvements for the rate limiting system:

1. **Redis Integration**: Use Redis for faster in-memory rate limiting
2. **Rate Limit Categories**: Different limits for authenticated vs anonymous users
3. **Dynamic Limits**: Adjust limits based on user behavior or subscription tier
4. **Rate Limit Analytics**: Track and analyze rate limit usage patterns
5. **Webhook Notifications**: Alert administrators when rate limits are frequently exceeded
