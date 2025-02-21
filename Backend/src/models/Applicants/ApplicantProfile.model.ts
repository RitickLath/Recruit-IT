import mongoose from "mongoose";

const ApplicantProfileSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      maxLength: [50, "Location can't exceed 50 characters"],
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
    birthDate: {
      type: Date,
    },
    preferredLocation: {
      type: [String],
    },
    preferredJobType: {
      type: [String],
      enum: ["Full-Time", "Part-Time", "Internship", "Contract"],
    },
    education: [
      {
        degree: { type: String, required: true },
        institute: { type: String, required: true },
        yearOfCompletion: { type: Number, required: true },
        grade: { type: String, required: true },
      },
    ],
    keySkills: {
      type: [String],
    },
    languages: [
      {
        language: { type: String, required: true },
        canRead: { type: Boolean, default: false },
        canWrite: { type: Boolean, default: false },
        canSpeak: { type: Boolean, default: false },
      },
    ],
    experience: [
      {
        companyName: { type: String, required: true },
        role: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date },
        responsibilities: { type: String },
      },
    ],
    projects: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
        technologiesUsed: { type: [String] },
        startDate: { type: Date },
        endDate: { type: Date },
      },
    ],
    profileSummary: {
      type: String,
      maxLength: [500, "Profile Summary can't exceed 500 characters"],
    },
    accomplishments: {
      type: String,
      maxLength: [300, "Accomplishments can't exceed 300 characters"],
    },
    awards: {
      type: [String],
    },
    competitiveExams: [
      {
        examName: { type: String, required: true },
        score: { type: String },
        year: { type: Number },
      },
    ],
    academicAchievements: {
      type: String,
      maxLength: [300, "Academic Achievements can't exceed 300 characters"],
    },
    resume: {
      type: String,
    },
    applied: [
      {
        jobId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "JobPosting",
          required: true,
        },
        appliedAt: {
          type: Date,
          default: Date.now,
        },
        status: {
          type: String,
          enum: ["Pending", "Reviewed", "Shortlisted", "Accepted", "Rejected"],
          default: "Pending",
        },
      },
    ],
  },
  { timestamps: true }
);

const ApplicantProfile = mongoose.model(
  "ApplicantProfile",
  ApplicantProfileSchema
);

export default ApplicantProfile;

/*
 Applicant Profile Schema Details:
1 location (String) - Max length 50.
2 gender (String) - Enum: Male, Female, Other.
3 birthDate (Date) - Optional.
4 preferredLocation (Array of Strings) - Optional.
5 preferredJobType (Array of Strings) - Enum options: Full-Time, Part-Time, Internship, Contract.
6 education (Array of Objects) - Stores degree, institute, year, grade.
7 keySkills (Array of Strings) - List of skills.
8 languages (Array of Objects) - Tracks read, write, speak for each language.
9 experience (Array of Objects) - Stores work history.
10 projects (Array of Objects) - Stores projects with details.
11 profileSummary (String) - Max length 500.
12 accomplishments (String) - Max length 300.
13 awards (Array of Strings) - List of awards.
14 competitiveExams (Array of Objects) - Stores exam details.
15 academicAchievements (String) - Max length 300.
16 resume (String) - Resume file path or link.
17 applied (Array of Objects) - Jobs applied by the applicant.
*/
