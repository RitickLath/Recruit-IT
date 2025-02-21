import mongoose from "mongoose";

const ApplicantSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxLength: [30, "Name can't exceed 30 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      maxLength: [50, "Email can't exceed 50 characters"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    mobileNumber: {
      type: String,
      required: [true, "Mobile number is required"],
      match: [/^\d{10}$/, "Invalid mobile number"],
    },
    workStatus: {
      type: String,
      enum: ["Fresher", "Experienced"],
      required: [true, "Work status is required"],
    },
    profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ApplicantProfile",
    },
  },
  { timestamps: true }
);

const Applicant = mongoose.model("Applicant", ApplicantSchema);

export default Applicant;

/*
Applicant Schema Details:
1. fullName (String) - Required, max length 30, trimmed.
2 email (String) - Required, unique, lowercase, max length 50.
3 password (String) - Required.
4 mobileNumber (String) - Required, exactly 10 digits.
5 workStatus (String) - Required, must be either "Fresher" or "Experienced".
6 profile (ObjectId) - Reference to "ApplicantProfile" schema.
7 timestamps - Automatically records createdAt & updatedAt.
*/
