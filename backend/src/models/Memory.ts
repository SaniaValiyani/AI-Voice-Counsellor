import mongoose from "mongoose";

const memorySchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      required: true,
      unique: true,
    },

    memories: {
      type: [String],
      default: [],
    },

    summary: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Memory",
  memorySchema
);