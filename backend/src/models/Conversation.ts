import mongoose from "mongoose";

const messageSchema =
  new mongoose.Schema(
    {
      sender: String,

      message: String,

      timestamp: String,
    },
    {
      _id: false,
    }
  );

const conversationSchema =
  new mongoose.Schema(
    {
      student: {
        type: mongoose.Schema.Types.ObjectId,

        ref: "Student",

        required: true,
      },

      messages: [messageSchema],

      language: String,

      sentiment: String,
    },
    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "Conversation",
  conversationSchema
);