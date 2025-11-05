import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/userModel.js";
import Student from "../models/studentModel.js";
import connectDB from "../config/db.js";
import { logger } from "../utils/logger.js";

dotenv.config();

const seedData = async () => {
  try {
    await connectDB();

    // Clear existing data
    await User.deleteMany({});
    await Student.deleteMany({});

    logger.info("Data cleared!");

    // Create admin user
    const adminUser = await User.create({
      name: "Admin User",
      email: "admin@example.com",
      password: "password123",
      role: "admin",
    });

    logger.info("Admin user created");

    // Create sample students
    const students = [
      {
        studentId: "S2025001",
        firstName: "Ali",
        lastName: "Ahmed",
        email: "ali.ahmed@example.com",
        course: "Computer Science",
        year: 2,
        gpa: 3.6,
        createdBy: adminUser._id,
      },
      {
        studentId: "S2025002",
        firstName: "Sara",
        lastName: "Khan",
        email: "sara.khan@example.com",
        course: "Business Administration",
        year: 1,
        gpa: 3.9,
        createdBy: adminUser._id,
      },
      {
        studentId: "S2025003",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        course: "Computer Science",
        year: 3,
        gpa: 3.2,
        createdBy: adminUser._id,
      },
    ];

    await Student.insertMany(students);
    logger.info("Sample students created");

    logger.info("Data seeded successfully!");
    process.exit();
  } catch (error) {
    logger.error(`Seed error: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await connectDB();

    await User.deleteMany({});
    await Student.deleteMany({});

    logger.info("Data destroyed!");
    process.exit();
  } catch (error) {
    logger.error(`Destroy error: ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  seedData();
}
