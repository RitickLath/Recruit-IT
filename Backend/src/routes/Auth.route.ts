import express from "express";
import { Credentials } from "../models";
import { login, register } from "../controllers/Auth";

const AuthRouter = express.Router();

// Register a new user
AuthRouter.post("/register", register);

// Login user
AuthRouter.post("/login", login);

// Request password forget link
AuthRouter.post("/forget-password", (req, res) => {});

export default AuthRouter;
