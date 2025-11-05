import Student from "../models/studentModel.js";
import asyncHandler from "express-async-handler";

// @desc   Get all students
// @route  GET /api/students
// @access Private/Admin
const getStudents = asyncHandler(async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// @desc   Create a new student
// @route  POST /api/students
// @access Private/Admin
const createStudent = asyncHandler(async (req, res) => {
  const { name, email, course, year } = req.body;

  if (!name || !email || !course || !year) {
    res.status(400);
    throw new Error("Please fill all fields");
  }

  const studentExists = await Student.findOne({ email });
  if (studentExists) {
    res.status(400);
    throw new Error("Student already exists");
  }

  const student = await Student.create({ name, email, course, year });
  res.status(201).json(student);
});

// @desc   Delete a student
// @route  DELETE /api/students/:id
// @access Private/Admin
const deleteStudent = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (!student) {
    res.status(404);
    throw new Error("Student not found");
  }
  await student.remove();
  res.json({ message: "Student deleted successfully" });
});

export { getStudents, createStudent, deleteStudent };
