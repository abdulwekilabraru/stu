import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      required: [true, "Student ID is required"],
      unique: true,
      trim: true,
      uppercase: true,
    },
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
    },
    dateOfBirth: {
      type: Date,
    },
    course: {
      type: String,
      trim: true,
    },
    year: {
      type: Number,
      min: 1,
      max: 6,
    },
    gpa: {
      type: Number,
      min: 0.0,
      max: 4.0,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual for full name
studentSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

// Indexing for faster queries
studentSchema.index({ studentId: 1 });
studentSchema.index({ email: 1 });
studentSchema.index({ course: 1, year: 1 });
studentSchema.index({ firstName: "text", lastName: "text" });

const Student = mongoose.model("Student", studentSchema);

export default Student;
