import mongoose from "mongoose";

const ApplicantSchema = new mongoose.Schema(
  {
    Credentials: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Credentials",
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
