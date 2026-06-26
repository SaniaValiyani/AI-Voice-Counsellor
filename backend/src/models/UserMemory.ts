import mongoose from "mongoose";

const userMemorySchema =
new mongoose.Schema({

  category: {
    type: String,
    required: true,
  },

  value: {
    type: String,
    required: true,
  },

},
{
  timestamps: true,
});

export default mongoose.model(
  "UserMemory",
  userMemorySchema
);