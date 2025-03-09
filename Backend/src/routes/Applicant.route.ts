import express from "express";
import { authMiddleware } from "../middlewares";
import {
  allJobs,
  checkApplicationStatus,
  getProfile,
  jobsAppliedAt,
  searchJobByCompany,
  searchJobByTag,
  UpdateProfile,
  uploadResume,
} from "../controllers";

const ApplicantRouter = express.Router();

// Get all job listings (Pagination also applied)
ApplicantRouter.get("/jobs", allJobs);

// View applicant profile
ApplicantRouter.get("/profile", authMiddleware, getProfile);

// jobs applied at (Need fix for showing appliedAt and Status of job)
ApplicantRouter.get("/applied-jobs", authMiddleware, jobsAppliedAt);

// Search jobs by tag
ApplicantRouter.get("/jobs/search/tag/:tag", searchJobByTag);

// Search jobs by company
ApplicantRouter.get("/jobs/search/company/:company", searchJobByCompany);

// Check job application status
ApplicantRouter.get(
  "/application/:jobId",
  authMiddleware,
  checkApplicationStatus
);

// Upload or update resume
ApplicantRouter.post("/upload-resume", authMiddleware, uploadResume);

// Update applicant profile
ApplicantRouter.put("/profile", authMiddleware, UpdateProfile);

// apply for job
ApplicantRouter.put("/apply", authMiddleware, async (req, res) => {});

export default ApplicantRouter;
