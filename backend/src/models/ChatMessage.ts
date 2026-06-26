import mongoose
from "mongoose";

const chatSchema =
new mongoose.Schema(
{
  sender: String,

  message: String,

  timestamp: String,
},
{
  timestamps:true,
}
);

export default mongoose.model(
  "ChatMessage",
  chatSchema
);