import mongoose from "mongoose";

const JobPostingSchema = new mongoose.Schema(
  {
    employerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "HR",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      maxLength: 30,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    redirectURL: {
      type: String,
    },
    salary: {
      type: Number,
    },
    experienceLevels: { type: [String] },
    industries: { type: [String] },
    jobTypes: {
      type: [String],
      enum: ["Full-Time", "Part-Time", "Internship", "Contract"],
    },
    applicants: [
      {
        jobSeekerId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Applicant",
          required: true,
        },
        appliedAt: {
          type: Date,
          default: Date.now,
        },
        status: {
          type: String,
          enum: ["Pending", "Reviewed", "Accepted", "Rejected"],
          default: "Pending",
        },
      },
    ],
  },
  { timestamps: true }
);

const JobPosting = mongoose.model("JobPosting", JobPostingSchema);

export default JobPosting;

/*
 Job Posting Schema Details:
1 employerId (ObjectId) - Refers to HR who posted the job.
2 title (String) - Required, max length 30.
3 jobDescription (String) - Required.
4 redirectURL (String) - Optional, for external job applications.
5 salary (Number) - Optional.
6 experienceLevels (Array of Strings) - Optional.
7 industries (Array of Strings) - Optional.
8 jobTypes (Array of Strings) - Enum: Full-Time, Part-Time, Internship, Contract.
9 applicants (Array of Objects) - Tracks job seekers who applied.
*/
