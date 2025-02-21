import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema(
  {
    employerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
    companyName: {
      type: String,
      unique: true,
      required: [true, "Company name is required"],
      trim: true,
    },
    industry: {
      type: String,
      required: [true, "Industry is required"],
      trim: true,
    },
    companySize: {
      type: String,
      enum: ["1-10", "11-50", "51-200", "201-500", "501-1000", "1001+"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
    },
    website: {
      type: String,
      trim: true,
    },
    companyDescription: {
      type: String,
      maxLength: [1000, "Company description can't exceed 1000 characters"],
      trim: true,
    },
    logo: {
      type: String,
    },
    socialLinks: {
      linkedin: { type: String, trim: true },
      twitter: { type: String, trim: true },
    },
    jobPostings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "JobPosting",
      },
    ],
    establishedYear: {
      type: Number,
    },
    certifications: {
      type: [String],
    },
    HRs: [
      {
        type: [String],
        ref: "HR",
      },
    ],
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", CompanySchema);

export default Company;

/*
 Company Schema Details:
1 employerId (ObjectId) - Required, references Admin.
2 companyName (String) - Required, unique, trimmed for clean input.
3 industry (String) - Required, trimmed.
4 companySize (String) - Enum, predefined size categories.
5 location (String) - Required, trimmed for clean input.
6 website (String) - Optional, trimmed.
7 companyDescription (String) - Optional, max 1000 characters, trimmed.
8 logo (String) - Optional, URL to company logo.
9 socialLinks (Object) - Contains LinkedIn & Twitter URLs.
10 jobPostings (Array of ObjectIds) - References "JobPosting" schema.
11 establishedYear (Number) - Optional, company founding year.
12 certifications (Array of Strings) - Holds certifications.
13 HRs (Array of ObjectIds) - References HR managers in the company.
14 timestamps - Automatically records createdAt & updatedAt.
*/
