import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import { logger, morganMiddleware } from "./utils/logger.js";

dotenv.config();

// Ensure DB connects before starting the server
await connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morganMiddleware);

app.get("/", (req, res) => {
  logger.info("Received request to root / endpoint");
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => logger.info(`✅ Server running on port ${PORT}`));
