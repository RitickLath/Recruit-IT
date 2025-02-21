import express from "express";

const AdminRouter = express.Router();

// Create a company
AdminRouter.post("/company", (req, res) => {});

// Update company details
AdminRouter.put("/company/:companyId", (req, res) => {});

// Approve or reject an HR
AdminRouter.put("/hr/:hrId", (req, res) => {});

// Get all jobs in a company
AdminRouter.get("/jobs", (req, res) => {});

// Delete a company
AdminRouter.delete("/companies", (req, res) => {});

export default AdminRouter;
