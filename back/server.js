// Main application entry point
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import { logger, morganMiddleware } from "./utils/logger.js";
import authRoutes from "./routes/authRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, ".env") });

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

// Mount routes
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => logger.info(`✅ Server running on port ${PORT}`));
