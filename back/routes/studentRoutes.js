// backend/routes/studentRoutes.js
import express from "express";
import { getStudents, createStudent, deleteStudent } from "../controllers/studentController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public read could be allowed; here we protect all student routes
router.use(protect);

router.get("/", getStudents);
router.post("/", adminOnly, createStudent); // only admin can create
router.delete("/:id", adminOnly, deleteStudent); // only admin can delete

export default router;
