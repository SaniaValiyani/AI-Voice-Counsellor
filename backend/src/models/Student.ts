import mongoose from "mongoose";

const goalSchema = new mongoose.Schema(
  {
    id: String,
    title: String,
    completed: Boolean,
  },
  { _id: false }
);

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },

    // Personal
    phone: {
      type: String,
      default: "",
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    college: {
      type: String,
      default: "",
    },

    branch: {
      type: String,
      default: "",
    },

    year: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      default: "",
    },

    bio: {
      type: String,
      default: "",
    },

    profileImage: {
      type: String,
      default: "",
    },

    // Professional
    linkedin: {
      type: String,
      default: "",
    },

    github: {
      type: String,
      default: "",
    },

    portfolio: {
      type: String,
      default: "",
    },

    resume: {
      type: String,
      default: "",
    },

    // Career
    careerGoal: {
      type: String,
      default: "",
    },

    educationLevel: {
      type: String,
      default: "",
    },

    preferredLanguage: {
      type: String,
      default: "English",
    },

    interests: {
      type: [String],
      default: [],
    },

    skills: {
      type: [String],
      default: [],
    },

    completedSkills: {
      type: [String],
      default: [],
    },

    strengths: {
      type: [String],
      default: [],
    },

    weaknesses: {
      type: [String],
      default: [],
    },

    recentTopics: {
      type: [String],
      default: [],
    },

    // Dashboard
    xp: {
      type: Number,
      default: 0,
    },

    level: {
      type: Number,
      default: 1,
    },

    learningStreak: {
      type: Number,
      default: 1,
    },

    goalProgress: {
      type: Number,
      default: 0,
    },

    careerReadiness: {
      type: Number,
      default: 0,
    },

    achievements: {
      type: [String],
      default: [],
    },

    goals: {
      type: [goalSchema],
      default: [],
    },

    timeline: {
      type: [String],
      default: [],
    },

    lastActiveDate: {
      type: String,
      default: "",
    },

    roadmap: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Student",
  studentSchema
);