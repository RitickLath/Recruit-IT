import mongoose from "mongoose";

const HRSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^\d{10}$/, "Invalid phone number format"],
    },
    companyAssociated: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    jobPostings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "JobPosting",
      },
    ],
  },
  { timestamps: true }
);

const HR = mongoose.model("HR", HRSchema);

export default HR;

/*
 HR Schema Details:
1 fullName (String) - Required, trimmed for clean input.
2 email (String) - Required, unique, lowercase, ensures no duplicates.
3 Verified (Boolean) - To check if the the HR is verified or not as a company Owner.
3 phoneNumber (String) - Required, must be exactly 10 digits.
4 companyAssociated (ObjectId) - References the associated company.
5 jobPostings (Array of ObjectIds) - List of job postings managed by HR.
6 timestamps - Automatically records createdAt & updatedAt.
*/
