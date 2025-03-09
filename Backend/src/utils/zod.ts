import { z } from "zod";

// Allowed roles
const roles = ["admin", "hr", "applicant"] as const;

// Password regex: At least 1 uppercase, 1 special character, min 8 chars
const passwordValidation = z
  .string()
  .min(8, { message: "Password must be at least 8 characters long" })
  .max(15, { message: "Password cannot exceed 15 characters" })
  .regex(/[A-Z]/, {
    message: "Password must contain at least one uppercase letter",
  })
  .regex(/[!@#$%^&*(),.?":{}|<>]/, {
    message: "Password must contain at least one special character",
  });

// SIGNUP SCHEMA
export const SignUpSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, { message: "Full name must be at least 3 characters long" })
    .max(25, { message: "Full name cannot exceed 25 characters" }),
  email: z.string().email({ message: "Invalid email format" }),
  password: passwordValidation,
  role: z.enum(roles, { message: "Invalid role selection" }),
});

// LOGIN SCHEMA
export const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  password: passwordValidation,
  role: z.enum(roles, { message: "Invalid role selection" }),
});
