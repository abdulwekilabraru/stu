import mongoose from "mongoose";
import { logger } from "../utils/logger.js";

const connectDB = async () => {
  try {
    // Ensure MONGO_URI is provided
    const uri = process.env.MONGO_URI;
    if (!uri) {
      logger.error("MONGO_URI is not set. Please create a .env file with MONGO_URI and restart the server.");
      process.exit(1);
    }

    // Mongoose 6+ no longer requires the old options, but keep placeholder for clarity
    const conn = await mongoose.connect(uri, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });

    logger.info(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    logger.error(`MongoDB connection error: ${error.message}`);
    if (process.env.NODE_ENV !== "production") logger.error(error);
    process.exit(1);
  }

  // Connection event handlers
  mongoose.connection.on("error", (err) => {
    logger.error("MongoDB connection error:", err);
  });

  mongoose.connection.on("disconnected", () => {
    logger.warn("MongoDB disconnected");
  });
};

export default connectDB;
