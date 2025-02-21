import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
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
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
  },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", AdminSchema);

export default Admin;

/*
 Admin Schema Details:
1 fullName (String) - Required, trimmed for clean input.
2 email (String) - Required, unique, lowercase, ensures no duplicates.
3 password (String) - Required.
4 companyId (ObjectId) - References the associated company (if applicable).
*/
