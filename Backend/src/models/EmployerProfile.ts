import mongoose from "mongoose";

const EmployerProfileSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
    maxLength: [20, "Location Max Length is 20"],
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
    enum: ["Job", "Internship"],
  },
  education: [
    {
      degree: { type: String, required: true },
      institute: { type: String, required: true },
      yearOfCompletion: { type: Number, required: true },
      grade: { type: String },
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
});

const EmployerProfile = mongoose.model(
  "EmployerProfile",
  EmployerProfileSchema
);

export default EmployerProfile;
