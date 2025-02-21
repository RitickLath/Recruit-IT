import express from "express";

const AuthRouter = express.Router();

// Register a new user
AuthRouter.post("/register", (req, res) => {});

// Login user
AuthRouter.post("/login", (req, res) => {});

// Alternative signup endpoint
AuthRouter.post("/signup", (req, res) => {});

// Request password reset link
AuthRouter.post("/forget-password", (req, res) => {});

// Reset password
AuthRouter.post("/reset-password", (req, res) => {});

export default AuthRouter;
