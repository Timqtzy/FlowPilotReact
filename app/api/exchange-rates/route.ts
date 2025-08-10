import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

const EXCHANGE_RATE_API_KEY = '62d00c423b7b2a687d358ae4';
const EXCHANGE_RATE_API_URL = 'https://v6.exchangerate-api.com/v6';

// Default update intervals (in hours) - can be overridden by database config
const DEFAULT_UPDATE_INTERVALS = {
  USD: 24,    // USD updates every 24 hours
  EUR: 24,    // EUR updates every 12 hours  
  GBP: 24,    // GBP updates every 12 hours
  CAD: 24,     // CAD updates every 8 hours
  AUD: 24,     // AUD updates every 8 hours
  JPY: 24,     // JPY updates every 6 hours
  CHF: 24,    // CHF updates every 12 hours
  SGD: 24,     // SGD updates every 8 hours
  MOP: 24,     // MOP updates every 6 hours
  PHP: 24,     // PHP updates every 6 hours
};

export async function GET(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db('flowpilot');
    const ratesCollection = db.collection('exchange_rates');
    const configCollection = db.collection('exchange_rate_config');
    
    // Get current time
    const now = new Date();
    
    // Get configurable update intervals (or use defaults)
    let updateIntervals = DEFAULT_UPDATE_INTERVALS;
    try {
      const config = await configCollection.findOne({ _id: 'update_intervals' });
      if (config && config.intervals) {
        updateIntervals = { ...DEFAULT_UPDATE_INTERVALS, ...config.intervals };
      }
    } catch (configError) {
      console.warn('Using default update intervals due to config error:', configError);
    }
    
    // Check if we have recent rates for each currency
    const existingRates = await ratesCollection.find({}).toArray();
    
    // Determine which currencies need updating
    const currenciesToUpdate: string[] = [];
    const currentRates: any[] = [];
    
    for (const currency of Object.keys(updateIntervals)) {
      const existingRate = existingRates.find(rate => rate.currency === currency);
      const updateInterval = updateIntervals[currency as keyof typeof updateIntervals];
      const lastUpdate = existingRate?.lastUpdated;
      
      if (!existingRate || !lastUpdate || 
          (now.getTime() - new Date(lastUpdate).getTime()) > (updateInterval * 60 * 60 * 1000)) {
        currenciesToUpdate.push(currency);
      } else {
        currentRates.push(existingRate);
      }
    }
    
    // If we have all current rates, return them
    if (currenciesToUpdate.length === 0 && currentRates.length > 0) {
      return NextResponse.json({
        success: true,
        rates: currentRates.map(rate => ({
          code: rate.currency,
          symbol: rate.symbol,
          name: rate.name,
          rate: rate.rate
        })),
        updatedAt: new Date(),
        source: 'database',
        message: 'All rates are current'
      });
    }
    
    // Fetch new rates for currencies that need updating
    if (currenciesToUpdate.length > 0) {
      try {
        const response = await fetch(`${EXCHANGE_RATE_API_URL}/${EXCHANGE_RATE_API_KEY}/latest/USD`);
        
        if (!response.ok) {
          throw new Error(`API request failed: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.result !== 'success') {
          throw new Error('API returned error: ' + data['error-type']);
        }
        
        // Update each currency that needs refreshing
        for (const currency of currenciesToUpdate) {
          const rate = data.conversion_rates[currency];
          if (rate) {
            const currencyData = {
              currency: currency,
              symbol: getCurrencySymbol(currency),
              name: getCurrencyName(currency),
              rate: rate,
              lastUpdated: now,
              updateInterval: updateIntervals[currency as keyof typeof updateIntervals]
            };
            
            // Upsert the currency rate
            await ratesCollection.updateOne(
              { currency: currency },
              { $set: currencyData },
              { upsert: true }
            );
            
            // Add to current rates
            currentRates.push(currencyData);
          }
        }
        
        // Add USD (base currency)
        const usdData = {
          currency: 'USD',
          symbol: '$',
          name: 'US Dollar',
          rate: 1,
          lastUpdated: now,
          updateInterval: updateIntervals.USD
        };
        
        await ratesCollection.updateOne(
          { currency: 'USD' },
          { $set: usdData },
          { upsert: true }
        );
        
        // Ensure USD is in current rates
        const usdIndex = currentRates.findIndex(rate => rate.currency === 'USD');
        if (usdIndex >= 0) {
          currentRates[usdIndex] = usdData;
        } else {
          currentRates.push(usdData);
        }
        
      } catch (apiError) {
        console.error('Error fetching from API:', apiError);
        
        // If API fails, try to return what we have in database
        if (currentRates.length > 0) {
          return NextResponse.json({
            success: true,
            rates: currentRates.map(rate => ({
              code: rate.currency,
              symbol: rate.symbol,
              name: rate.name,
              rate: rate.rate
            })),
            updatedAt: new Date(),
            source: 'database_fallback',
            warning: 'Using cached rates due to API error',
            currenciesUpdated: currenciesToUpdate.length
          });
        }
      }
    }
    
    // Return all current rates
    return NextResponse.json({
      success: true,
      rates: currentRates.map(rate => ({
        code: rate.currency,
        symbol: rate.symbol,
        name: rate.name,
        rate: rate.rate
      })),
      updatedAt: now,
      source: 'database_updated',
      currenciesUpdated: currenciesToUpdate.length
    });
    
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
