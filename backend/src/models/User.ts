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
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    settings: {
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
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "User",
  userSchema
);