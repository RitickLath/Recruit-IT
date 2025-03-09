import express from "express";
import { Admin, Applicant, Credentials, HR } from "../models";
import bcryptjs from "bcryptjs";
const AuthRouter = express.Router();

// full name, email, password, role ->
// Profile schema
// role: applicant, hr, company

// Register a new user
AuthRouter.post("/register", async (req, res) => {
  const { fullName, email, password, role } = req.body;

  // Will do Data Validation using Zod

  try {
    // Check if the user already exists
    const isExists = await Credentials.findOne({ email });
    if (isExists) {
      res
        .status(400)
        .json({ status: false, message: "User Already Exists. Please Login" });
      return;
    }

    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create user credentials
    const user = await Credentials.create({
      email,
      password: hashedPassword,
      fullName,
      role,
    });

    // Assign user to the correct model
    if (role === "admin") {
      await Admin.create({ Credentials: user._id });
    } else if (role === "hr") {
      await HR.create({ Credentials: user._id });
    } else if (role === "applicant") {
      await Applicant.create({ Credentials: user._id });
    }

    res.json({ status: true, message: "User Registered Successfully." });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      status: false,
      message: "Something went wrong while registering",
    });
  }
});

// Login user
AuthRouter.post("/login", (req, res) => {});

// Alternative signup endpoint
AuthRouter.post("/signup", (req, res) => {});

// Request password reset link
AuthRouter.post("/forget-password", (req, res) => {});

// Reset password
AuthRouter.post("/reset-password", (req, res) => {});

export default AuthRouter;
