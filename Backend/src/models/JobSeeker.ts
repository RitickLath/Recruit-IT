import mongoose from "mongoose";

const JobSeekerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Name is Must"],
    trim: true,
    maxLength: [30, "Name can't exceed 30 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is Must"],
    trim: true,
    maxLength: [50, "Email can't exceed 50 characters"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Password is Must"],
  },
  mobileNumber: {
    type: String,
    required: [true, "Mobile number is required"],
    match: [/^\d{10}$/, "Mobile number must be exactly 10 digits"],
  },
  workStatus: {
    type: String,
    enum: ["Fresher", "Experienced"],
    required: [true, "Work Status is Must"],
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SeekerProfile",
  },
});

const JobSeeker = mongoose.model("JobSeeker", JobSeekerSchema);

export default JobSeeker;
