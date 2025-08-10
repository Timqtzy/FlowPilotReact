#!/usr/bin/env node

/**
 * Cleanup script for rate limit records
 * This script removes rate limit entries older than 24 hours
 * Can be run manually or scheduled with cron
 */

const { MongoClient } = require('mongodb');

async function cleanupRateLimits() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI environment variable is required');
    process.exit(1);
  }

  let client;
  try {
    // Connect to MongoDB
    client = new MongoClient(uri);
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('flowpilot');
    const collection = db.collection('rate_limits');

    // Remove entries older than 24 hours
    const cutoff = new Date(Date.now() - (24 * 60 * 60 * 1000));
    
    const result = await collection.deleteMany({
      timestamp: { $lt: cutoff }
    });

    console.log(`Cleaned up ${result.deletedCount} old rate limit records`);
    console.log(`Cutoff time: ${cutoff.toISOString()}`);

    // Get current count
    const currentCount = await collection.countDocuments();
    console.log(`Current rate limit records: ${currentCount}`);

  } catch (error) {
    console.error('Cleanup failed:', error);
    process.exit(1);
  } finally {
    if (client) {
      await client.close();
      console.log('Disconnected from MongoDB');
    }
  }
}

// Run cleanup if this script is executed directly
if (require.main === module) {
  cleanupRateLimits()
    .then(() => {
      console.log('Cleanup completed successfully');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Cleanup failed:', error);
      process.exit(1);
    });
}

module.exports = { cleanupRateLimits };
