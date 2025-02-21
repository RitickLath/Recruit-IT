import express from "express";

const HrRouter = express.Router();

// Create a job posting
HrRouter.post("/job", (req, res) => {});

// Update job details
HrRouter.put("/job/:jobId", (req, res) => {});

// Update applicant status
HrRouter.put("/applicant/:applicantId", (req, res) => {});

// Get all jobs posted by HR
HrRouter.get("/jobs", (req, res) => {});

// Get all applicants for a job
HrRouter.get("/job/:jobId/applicants", (req, res) => {});

// Delete a job posting
HrRouter.delete("/job/:jobId", (req, res) => {});

export default HrRouter;
