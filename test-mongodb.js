const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function testMongoDB() {
  try {
    console.log('Testing MongoDB connection...');
    console.log('MONGODB_URI:', process.env.MONGODB_URI ? 'Set' : 'Not set');
    
    if (!process.env.MONGODB_URI) {
      console.error('MONGODB_URI environment variable is not set');
      return;
    }
    
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    console.log('✅ MongoDB connected successfully!');
    
    const db = client.db('flowpilot');
    console.log('✅ Database "flowpilot" accessed');
    
    // Test creating a collection
    const collection = db.collection('test');
    await collection.insertOne({ test: 'connection', timestamp: new Date() });
    console.log('✅ Collection write test successful');
    
    // Test reading
    const result = await collection.findOne({ test: 'connection' });
    console.log('✅ Collection read test successful:', result);
    
    // Clean up
    await collection.deleteOne({ test: 'connection' });
    console.log('✅ Collection cleanup successful');
    
    await client.close();
    console.log('✅ MongoDB connection closed');
    
  } catch (error) {
    console.error('❌ MongoDB test failed:', error.message);
  }
}

testMongoDB();
