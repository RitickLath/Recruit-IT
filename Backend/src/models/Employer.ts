import mongoose from "mongoose";

const EmployerSchema = new mongoose.Schema({
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
  organization: {
    type: String,
    required: [true, "Organization/Company Name is Must"],
    trim: true,
    maxLength: [50, "Organization name can't exceed 50 characters"],
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "EmployerProfile",
  },
});

const Employer = mongoose.model("Employer", EmployerSchema);

export default Employer;
