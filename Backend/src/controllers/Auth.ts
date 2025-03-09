import { Admin, Applicant, Credentials, HR } from "../models";
import bcryptjs from "bcryptjs";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { LoginSchema, SignUpSchema } from "../utils/zod";

export const register = async (req: Request, res: Response) => {
  const { fullName, email, password, role } = req.body;

  // zod validation check
  const validationResult = SignUpSchema.safeParse(req.body);

  // Early Return if zod validation fails
  if (!validationResult.success) {
    res.status(400).json({
      status: false,
      message: "Validation failed",
      errors: validationResult.error.format(),
    });
    return;
  }
  // Will do Data Validation using Zod

  // Init the session and start it
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // Check if the user already exists
    const isExists = await Credentials.findOne({ email }).session(session);
    if (isExists) {
      await session.abortTransaction();
      session.endSession();
      res.status(400).json({
        status: false,
        message: "User Already Exists. Please Login",
      });
      return;
    }

    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create user credentials
    const user = await Credentials.create(
      [{ email, password: hashedPassword, fullName, role }],
      { session }
    );

    // Assign user to the correct model
    if (role === "admin") {
      await Admin.create([{ Credentials: user[0]._id }], { session });
    } else if (role === "hr") {
      await HR.create([{ Credentials: user[0]._id }], { session });
    } else if (role === "applicant") {
      await Applicant.create([{ Credentials: user[0]._id }], { session });
    }

    // COMMIT THE TRANSACTION
    await session.commitTransaction();
    session.endSession();

    res.json({ status: true, message: "User Registered Successfully." });
  } catch (e) {
    console.error(e);
    await session.abortTransaction();
    session.endSession();
    res.status(500).json({
      status: false,
      message: "Something went wrong while registering",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password, role } = req.body;

  // zod validation check
  const validationResult = LoginSchema.safeParse(req.body);
  
  // Early Return if zod validation fails
  if (!validationResult.success) {
    res.status(400).json({
      status: false,
      message: "Validation failed",
      errors: validationResult.error.format(),
    });
    return;
  }

  try {
    // Find user by email
    const user = await Credentials.findOne({ email });

    // Check if user exists
    if (!user) {
      res.status(400).json({ status: false, message: "Wrong Credentials" });
      return;
    }

    // Check if role matches
    if (user.role !== role) {
      res.status(400).json({ status: false, message: "Role mismatch" });
      return;
    }

    // Verify password
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(400).json({ status: false, message: "Wrong Credentials" });
      return;
    }

    // Generate JWT token
    const payload = { id: user._id, role };
    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET as unknown as string,
      {
        expiresIn: "1d",
      }
    );

    // Send response
    res
      .status(200)
      .json({ status: true, message: "User Logged In", data: { token } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Something Went Wrong" });
  }
};

export const forgetPassword = async (req: Request, res: Response) => {};
