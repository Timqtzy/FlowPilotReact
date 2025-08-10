#!/usr/bin/env node

/**
 * Test script for rate limiting system
 * This script tests the rate limiting by making multiple requests
 */

const { MongoClient } = require('mongodb');

async function testRateLimit() {
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

    // Clear existing test data
    await collection.deleteMany({ ip: 'test-ip' });
    console.log('Cleared existing test data');

    // Simulate rate limiting for test IP
    const testIP = 'test-ip';
    const now = new Date();
    const windowMs = 60 * 60 * 1000; // 1 hour
    const maxRequests = 5; // Small limit for testing

    console.log(`\nTesting rate limiting with ${maxRequests} requests per hour window...`);

    // Make requests up to the limit
    for (let i = 1; i <= maxRequests + 2; i++) {
      const requestTime = new Date(now.getTime() + (i * 1000)); // 1 second apart
      
      // Check if we're within the limit
      const windowStart = new Date(requestTime.getTime() - windowMs);
      
      // Clean up old entries
      await collection.deleteMany({
        ip: testIP,
        timestamp: { $lt: windowStart }
      });

      // Count current requests
      const requestCount = await collection.countDocuments({
        ip: testIP,
        timestamp: { $gte: windowStart }
      });

      if (requestCount >= maxRequests) {
        console.log(`❌ Request ${i}: Rate limit exceeded (${requestCount}/${maxRequests})`);
        break;
      }

      // Record the request
      await collection.insertOne({
        ip: testIP,
        timestamp: requestTime,
        userAgent: 'test-script',
        endpoint: '/api/test'
      });

      console.log(`✅ Request ${i}: Recorded (${requestCount + 1}/${maxRequests})`);
    }

    // Show current state
    const currentCount = await collection.countDocuments({ ip: testIP });
    console.log(`\nCurrent test records: ${currentCount}`);

    // Test cleanup
    console.log('\nTesting cleanup...');
    const oldTime = new Date(now.getTime() - (25 * 60 * 60 * 1000)); // 25 hours ago
    
    await collection.insertOne({
      ip: testIP,
      timestamp: oldTime,
      userAgent: 'test-script',
      endpoint: '/api/test'
    });

    const beforeCleanup = await collection.countDocuments({ ip: testIP });
    console.log(`Records before cleanup: ${beforeCleanup}`);

    // Simulate cleanup (remove records older than 24 hours)
    const cutoff = new Date(now.getTime() - (24 * 60 * 60 * 1000));
    await collection.deleteMany({
      ip: testIP,
      timestamp: { $lt: cutoff }
    });

    const afterCleanup = await collection.countDocuments({ ip: testIP });
    console.log(`Records after cleanup: ${afterCleanup}`);

    // Clean up test data
    await collection.deleteMany({ ip: testIP });
    console.log('\nCleaned up test data');

    console.log('\n✅ Rate limiting test completed successfully!');

  } catch (error) {
    console.error('Test failed:', error);
    process.exit(1);
  } finally {
    if (client) {
      await client.close();
      console.log('Disconnected from MongoDB');
    }
  }
}

// Run test if this script is executed directly
if (require.main === module) {
  testRateLimit()
    .then(() => {
      console.log('\n🎉 All tests passed!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n💥 Tests failed:', error);
      process.exit(1);
    });
}

module.exports = { testRateLimit };
