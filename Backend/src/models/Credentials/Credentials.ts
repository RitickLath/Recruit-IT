import mongoose from "mongoose";

const CredentialSchema = new mongoose.Schema(
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
    role: {
      type: String,
      required: [true, "Role is required"],
      enum: ["admin", "hr", "applicant"],
    },
  },
  { timestamps: true }
);

const Credentials = mongoose.model("Credentials", CredentialSchema);

export default Credentials;

/*
Credential Schema Details:
1 fullName (String) - Required, trimmed for clean input.
2 email (String) - Required, unique, lowercase, ensures no duplicates.
3 password (String) - Required.
4. Role (String) - Required (admin, hr, applicant)

*/
