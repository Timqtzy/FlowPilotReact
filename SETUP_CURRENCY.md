# Real-Time Currency System Setup

This project now includes a real-time currency conversion system that fetches exchange rates from ExchangeRate-API and stores them in MongoDB to minimize API calls.

## Features

- **Real-time exchange rates** from ExchangeRate-API
- **12-hour caching** to minimize API requests
- **MongoDB storage** for persistent rate caching
- **Automatic fallback** to cached rates if API fails
- **Manual refresh** button for immediate updates
- **Support for 10 currencies** including USD, EUR, GBP, CAD, AUD, JPY, CHF, SGD, MOP, and PHP

## Setup Requirements

### 1. MongoDB
You need a MongoDB instance running. You can use:
- **Local MongoDB**: Install and run locally
- **MongoDB Atlas**: Cloud-hosted MongoDB service
- **Docker**: Run MongoDB in a container

### 2. Environment Variables
Create a `.env.local` file in your project root with:

```bash
MONGODB_URI=mongodb://localhost:27017/flowpilot
EXCHANGE_RATE_API_KEY=62d00c423b7b2a687d358ae4
```

### 3. Database Setup
The system will automatically create:
- Database: `flowpilot`
- Collection: `exchange_rates`
- Document: `{ _id: 'latest', rates: [...], updatedAt: Date, baseCurrency: 'USD' }`

## How It Works

### API Endpoint
- **Route**: `/api/exchange-rates`
- **Method**: GET
- **Function**: Fetches rates from ExchangeRate-API and stores in MongoDB

### Caching Logic
1. **Check MongoDB** for rates less than 12 hours old
2. **If recent rates exist**: Return cached rates
3. **If no recent rates**: Fetch from API and store in MongoDB
4. **Fallback**: If API fails, return cached rates with warning

### Rate Updates
- **Automatic**: Every 12 hours when endpoint is accessed
- **Manual**: Click refresh button in currency changer
- **Real-time**: Rates are fetched live from ExchangeRate-API

## API Usage

### ExchangeRate-API
- **Base URL**: `https://v6.exchangerate-api.com/v6/{API_KEY}/latest/USD`
- **Rate Limit**: 1000 requests per month (free tier)
- **Update Frequency**: Every 12 hours (2 requests per day)
- **Estimated Monthly Usage**: ~60 requests (well within limit)

### MongoDB Operations
- **Read**: Check for recent rates
- **Write**: Store new rates when fetched
- **Update**: Upsert latest rates

## Components

### CurrencyChanger
- Dropdown menu for currency selection
- Refresh button for manual updates
- Loading state indicator
- Last updated timestamp tooltip

### CurrencyContext
- Global state management
- API integration
- Local storage persistence
- Automatic rate fetching

## Error Handling

- **API Failures**: Fallback to cached rates
- **Database Errors**: Graceful degradation
- **Network Issues**: Retry on next request
- **Invalid Data**: Validation and sanitization

## Performance Optimizations

- **12-hour caching** reduces API calls by 95%
- **MongoDB indexing** on `updatedAt` field
- **Client-side caching** in localStorage
- **Lazy loading** of exchange rates

## Monitoring

- **Console logs** for debugging
- **API response tracking** in network tab
- **Database queries** in MongoDB logs
- **Error reporting** in browser console

## Troubleshooting

### Common Issues

1. **MongoDB Connection Failed**
   - Check `MONGODB_URI` environment variable
   - Ensure MongoDB is running
   - Verify network connectivity

2. **API Rate Limit Exceeded**
   - Check ExchangeRate-API dashboard
   - Verify API key is correct
   - Wait for rate limit reset

3. **Rates Not Updating**
   - Check browser console for errors
   - Verify API endpoint is accessible
   - Check MongoDB connection

### Debug Commands

```bash
# Check MongoDB connection
mongo flowpilot --eval "db.exchange_rates.find().pretty()"

# Test API endpoint
curl http://localhost:3000/api/exchange-rates

# Check environment variables
echo $MONGODB_URI
```

## Future Enhancements

- **WebSocket updates** for real-time rate changes
- **Multiple API providers** for redundancy
- **Rate alerting** for significant changes
- **Historical rate tracking** for analytics
- **Admin dashboard** for rate management
