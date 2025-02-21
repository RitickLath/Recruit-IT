import express from "express";

const ApplicantRouter = express.Router();

// Get all job listings
ApplicantRouter.get("/jobs", (req, res) => {});

// Search jobs by tag
ApplicantRouter.get("/jobs/search/tag/:tag", (req, res) => {});

// Search jobs by company
ApplicantRouter.get("/jobs/search/company/:company", (req, res) => {});

// View applicant profile
ApplicantRouter.get("/profile", (req, res) => {});

// Get all applied jobs
ApplicantRouter.get("/applied-jobs", (req, res) => {});

// Check job application status
ApplicantRouter.get("/application/:jobId", (req, res) => {});

// Upload or update resume
ApplicantRouter.post("/upload-resume", (req, res) => {});

// Update applicant profile
ApplicantRouter.put("/profile", (req, res) => {});

export default ApplicantRouter;
