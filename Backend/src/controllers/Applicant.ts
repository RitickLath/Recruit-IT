import { Request, Response } from "express";

import { ApplicantProfile, JobPosting } from "../models";

export const allJobs = async (req: Request, res: Response) => {
  try {
    //  Pagination Setup
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    // Pagination
    const jobs = await JobPosting.find()
      .select(
        "title jobDescription redirectURL salary experienceLevels industries jobTypes"
      )
      .skip(skip)
      .limit(limit);

    // Count total jobs for pagination
    const totalJobs = await JobPosting.countDocuments();

    res.json({
      status: true,
      data: jobs,
      paginationMeta: {
        currectPage: page,
        totalPage: Math.ceil(totalJobs / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ status: false, message: "Something went wrong" });
  }
};

export const getProfile = async (req: Request, res: Response) => {
  try {
    // Get the user from the auth middleware
    // @ts-ignore
    const user = req.user;

    // Ensure the user is an applicant
    if (user.role !== "applicant") {
      res.status(403).json({ status: false, message: "Unauthorized" });
      return;
    }

    // Fetching the applicant's profile
    // not including the applied section as we have already made seperate route for it
    const profile = await ApplicantProfile.findById(user.id).select("-applied");

    // If profile not found (maybe not required (check it!!!!!!!!!!))
    if (!profile) {
      res.status(404).json({
        status: false,
        message: "Profile not found",
      });
      return;
    }

    // Return the profile
    res.status(200).json({ status: true, data: profile });
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({
      status: false,
      message: "Something went wrong",
    });
  }
};

export const jobsAppliedAt = async (req: Request, res: Response) => {
  try {
    // @ts-ignore
    const userId = req.user.id;

    // Find the applicant profile and populate applied jobs
    const applied = await ApplicantProfile.findById(userId)
      .select("applied")
      .populate({
        path: "applied.jobId",
        select:
          "title jobDescription redirectURL salary experienceLevels industries jobTypes",
      });

    // If applicant profile not found
    if (!applied) {
      res.status(404).json({ status: false, message: "Profile not found" });
      return;
    }

    // Send the response
    res.status(200).json({ status: true, data: applied });
  } catch (error) {
    console.error("Error fetching applied jobs:", error);
    res.status(500).json({ status: false, message: "Something went wrong" });
  }
};

export const searchJobByTag = async (req: Request, res: Response) => {};

export const searchJobByCompany = async (req: Request, res: Response) => {};

export const checkApplicationStatus = async (req: Request, res: Response) => {};

export const uploadResume = async (req: Request, res: Response) => {};

export const UpdateProfile = async (req: Request, res: Response) => {};
