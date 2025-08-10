import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

const EXCHANGE_RATE_API_KEY = '62d00c423b7b2a687d358ae4';
const EXCHANGE_RATE_API_URL = 'https://v6.exchangerate-api.com/v6';

// All currencies update once per day (24 hours)
const UPDATE_INTERVAL_HOURS = 24;

export async function GET(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db('flowpilot');
    const ratesCollection = db.collection('exchange_rates');
    
    // Get current time
    const now = new Date();
    
    // Check if we have recent rates (less than 24 hours old)
    const existingRates = await ratesCollection.find({}).toArray();
    
    // Check if we need to update rates (if none exist or they're older than 24 hours)
    const needsUpdate = existingRates.length === 0 || 
      existingRates.some(rate => {
        if (!rate.lastUpdated) return true;
        const timeDiff = now.getTime() - new Date(rate.lastUpdated).getTime();
        return timeDiff > (UPDATE_INTERVAL_HOURS * 60 * 60 * 1000);
      });
    
    // If we have recent rates and don't need to update, return them from MongoDB
    if (!needsUpdate && existingRates.length > 0) {
      return NextResponse.json({
        success: true,
        rates: existingRates.map(rate => ({
          code: rate.currency,
          symbol: rate.symbol,
          name: rate.name,
          rate: rate.rate
        })),
        updatedAt: existingRates[0]?.lastUpdated || new Date(),
        source: 'mongodb_cached',
        message: 'Using cached rates from MongoDB (updated within 24 hours)',
        nextUpdate: new Date((existingRates[0]?.lastUpdated?.getTime() || now.getTime()) + (UPDATE_INTERVAL_HOURS * 60 * 60 * 1000))
      });
    }
    
    // Fetch new rates from API (only happens once per day)
    try {
      console.log('Fetching fresh exchange rates from API...');
      const response = await fetch(`${EXCHANGE_RATE_API_URL}/${EXCHANGE_RATE_API_KEY}/latest/USD`);
      
      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.result !== 'success') {
        throw new Error('API returned error: ' + data['error-type']);
      }
      
      // Clear old rates and insert new ones
      await ratesCollection.deleteMany({});
      
      const currencies = ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'JPY', 'CHF', 'SGD', 'MOP', 'PHP'];
      const newRates = [];
      
      for (const currency of currencies) {
        const rate = currency === 'USD' ? 1 : data.conversion_rates[currency];
        if (rate !== undefined) {
          const currencyData = {
            currency: currency,
            symbol: getCurrencySymbol(currency),
            name: getCurrencyName(currency),
            rate: rate,
            lastUpdated: now,
            updateInterval: UPDATE_INTERVAL_HOURS
          };
          
          await ratesCollection.insertOne(currencyData);
          newRates.push(currencyData);
        }
      }
      
      console.log(`Successfully updated ${newRates.length} currency rates in MongoDB`);
      
      // Return the fresh rates
      return NextResponse.json({
        success: true,
        rates: newRates.map(rate => ({
          code: rate.currency,
          symbol: rate.symbol,
          name: rate.name,
          rate: rate.rate
        })),
        updatedAt: now,
        source: 'api_fresh',
        message: 'Fresh rates fetched from API and stored in MongoDB',
        nextUpdate: new Date(now.getTime() + (UPDATE_INTERVAL_HOURS * 60 * 60 * 1000))
      });
      
    } catch (apiError) {
      console.error('Error fetching from API:', apiError);
      
      // If API fails, try to return what we have in database (even if old)
      if (existingRates.length > 0) {
        return NextResponse.json({
          success: true,
          rates: existingRates.map(rate => ({
            code: rate.currency,
            symbol: rate.symbol,
            name: rate.name,
            rate: rate.rate
          })),
          updatedAt: existingRates[0]?.lastUpdated || new Date(),
          source: 'mongodb_fallback',
          warning: 'Using existing rates due to API error - rates may be outdated',
          nextUpdate: new Date((existingRates[0]?.lastUpdated?.getTime() || now.getTime()) + (UPDATE_INTERVAL_HOURS * 60 * 60 * 1000))
        });
      }
      
      // If no rates exist and API fails, return error
      throw new Error('No exchange rates available and API request failed');
    }
    
  } catch (error) {
    console.error('Error in exchange rates API:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch exchange rates',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Helper functions for currency symbols and names
function getCurrencySymbol(currency: string): string {
  const symbols: { [key: string]: string } = {
    USD: '$', EUR: '€', GBP: '£', CAD: 'C$', AUD: 'A$',
    JPY: '¥', CHF: 'CHF', SGD: 'S$', MOP: 'MOP$', PHP: '₱'
  };
  return symbols[currency] || currency;
}

function getCurrencyName(currency: string): string {
  const names: { [key: string]: string } = {
    USD: 'US Dollar', EUR: 'Euro', GBP: 'British Pound',
    CAD: 'Canadian Dollar', AUD: 'Australian Dollar',
    JPY: 'Japanese Yen', CHF: 'Swiss Franc',
    SGD: 'Singapore Dollar', MOP: 'Macanese Pataca',
    PHP: 'Philippine Peso'
  };
  return names[currency] || currency;
}
