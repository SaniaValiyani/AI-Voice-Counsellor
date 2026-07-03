import ChatMessage from "../models/ChatMessage";
import Student from "../models/Student";
import UserMemory from "../models/UserMemory";

export async function getMemory(
userId:string
) {

  const student =
    await Student.findById(userId)

  const memories =
    await UserMemory.find();

  const messages =
    await ChatMessage
      .find()
      .sort({ createdAt: -1 })
      .limit(10);

  return {
    student,
    messages: messages.reverse(),
    memories,
  };
}