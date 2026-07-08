import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },

    theme: {
      type: String,
      default: "dark",
    },

    language: {
      type: String,
      default: "English",
    },

    aiPersonality: {
      type: String,
      default: "Friendly",
    },

    voiceRate: {
      type: Number,
      default: 1,
    },

    voicePitch: {
      type: Number,
      default: 1,
    },

    notifications: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Settings",
  settingsSchema
);