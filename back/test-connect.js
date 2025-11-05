import 'dotenv/config';
import connectDB from './config/db.js';

// Small script to test MongoDB connection using MONGO_URI from environment
(async () => {
  try {
    await connectDB();
    console.log('Connection test succeeded.');
    process.exit(0);
  } catch (err) {
    console.error('Connection test failed:', err);
    process.exit(1);
  }
})();
