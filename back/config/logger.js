import winston from "winston";
import morgan from "morgan";

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
    new winston.transports.File({ filename: "logs/error.log", level: "error" }),
    new winston.transports.File({ filename: "logs/combined.log" }),
  ],
});

// Morgan middleware for HTTP requests
const morganMiddleware = morgan("dev", {
  stream: {
    write: (message) => logger.info(message.trim()),
  },
});

export { logger, morganMiddleware };
