import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { applyRateLimit, rateLimiters } from '@/lib/rate-limit';

// GET: Retrieve current update intervals
export async function GET(request: NextRequest) {
  // Apply rate limiting
  const rateLimitResult = await applyRateLimit(request, rateLimiters.config);
  if (rateLimitResult.blocked) {
    return rateLimitResult.response;
  }

  try {
    const client = await clientPromise;
    const db = client.db('flowpilot');
    const collection = db.collection('exchange_rate_config');
    
    const config = await collection.findOne({ _id: 'update_intervals' as any });
    
    if (!config) {
      // Return default intervals if no config exists
      const defaultIntervals = {
        USD: 24,    // USD updates every 24 hours
        EUR: 12,    // EUR updates every 12 hours  
        GBP: 12,    // GBP updates every 12 hours
        CAD: 8,     // CAD updates every 8 hours
        AUD: 8,     // AUD updates every 8 hours
        JPY: 6,     // JPY updates every 6 hours
        CHF: 12,    // CHF updates every 12 hours
        SGD: 8,     // SGD updates every 8 hours
        MOP: 6,     // MOP updates every 6 hours
        PHP: 6,     // PHP updates every 6 hours
      };
      
      return NextResponse.json({
        success: true,
        intervals: defaultIntervals,
        message: 'Using default intervals'
      });
    }
    
    return NextResponse.json({
      success: true,
      intervals: config.intervals,
      lastModified: config.lastModified
    });
    
  } catch (error) {
    console.error('Error fetching config:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch config' },
      { status: 500 }
    );
  }
}

// POST: Update update intervals
export async function POST(request: NextRequest) {
  // Apply rate limiting
  const rateLimitResult = await applyRateLimit(request, rateLimiters.config);
  if (rateLimitResult.blocked) {
    return rateLimitResult.response;
  }

  try {
    const body = await request.json();
    const { intervals } = body;
    
    if (!intervals || typeof intervals !== 'object') {
      return NextResponse.json(
        { success: false, error: 'Invalid intervals data' },
        { status: 400 }
      );
    }
    
    // Validate intervals (must be positive numbers)
    for (const [currency, hours] of Object.entries(intervals)) {
      if (typeof hours !== 'number' || hours <= 0) {
        return NextResponse.json(
          { success: false, error: `Invalid interval for ${currency}: must be a positive number` },
          { status: 400 }
        );
      }
    }
    
    const client = await clientPromise;
    const db = client.db('flowpilot');
    const collection = db.collection('exchange_rate_config');
    
    // Update the configuration
    await collection.updateOne(
      { _id: 'update_intervals' as any },
      { 
        $set: { 
          intervals: intervals,
          lastModified: new Date()
        }
      },
      { upsert: true }
    );
    
    return NextResponse.json({
      success: true,
      message: 'Update intervals configured successfully',
      intervals: intervals,
      lastModified: new Date()
    });
    
  } catch (error) {
    console.error('Error updating config:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update config' },
      { status: 500 }
    );
  }
}
