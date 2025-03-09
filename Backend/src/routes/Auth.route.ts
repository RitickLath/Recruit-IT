// Completed
import express from "express";
import { forgetPassword, login, register } from "../controllers/Auth";

const AuthRouter = express.Router();

// Register a new user
AuthRouter.post("/register", register);

// Login user
AuthRouter.post("/login", login);

// Request password forget link
AuthRouter.post("/forget-password", forgetPassword);

export default AuthRouter;
