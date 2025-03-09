import e, { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

// Extending Request to include user data
interface AuthRequest extends Request {
  user?: { id: string; role: string };
}

export const authMiddleware = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    // Extract token from Authorization header
    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res
        .status(401)
        .json({ status: false, message: "Unauthorized: No token provided" });
      return;
    }

    // Get the token (remove "Bearer " prefix)
    const token = authHeader.split(" ")[1];

    // Verify JWT
    const jwtVerified = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: string;
      role: string;
    };

    // Attached userId and role to the request object
    req.user = { id: jwtVerified.id, role: jwtVerified.role };

    next();
  } catch (error) {
    console.log(error);
    res
      .status(403)
      .json({ status: false, message: "Invalid or expired token" });
    return;
  }
};
