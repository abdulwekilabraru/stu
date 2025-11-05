import winston from "winston";
import morgan from "morgan";
import fs from "fs";
import path from "path";

// Ensure logs directory exists
const logsDir = path.resolve("./logs");
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

// Winston logger configuration
const logger = winston.createLogger({
  level: "info", // log level
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.printf(
      (info) => `${info.timestamp} [${info.level.toUpperCase()}]: ${info.message}`
    )
  ),
  transports: [
    new winston.transports.Console(), // Log to console
    new winston.transports.File({ filename: path.join(logsDir, "error.log"), level: "error" }),
    new winston.transports.File({ filename: path.join(logsDir, "combined.log") }),
  ],
});

// Morgan middleware for HTTP requests
const morganMiddleware = morgan("dev", {
  stream: {
    write: (message) => logger.info(message.trim()),
  },
});

export { logger, morganMiddleware };
