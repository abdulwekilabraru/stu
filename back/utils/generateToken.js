// backend/utils/generateToken.js
import jwt from "jsonwebtoken";

export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || "dev-secret", {
    expiresIn: "7d",
  });
};
