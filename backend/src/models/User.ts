import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    profile: {
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

      skills: {
        type: [String],
        default: [],
      },

      interests: {
        type: [String],
        default: [],
      },

      xp: {
        type: Number,
        default: 0,
      },

      learningStreak: {
        type: Number,
        default: 0,
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "User",
  userSchema
);