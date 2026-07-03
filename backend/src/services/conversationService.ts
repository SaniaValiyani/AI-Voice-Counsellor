import Conversation from "../models/Conversation";

export async function saveConversation(

  studentId: string,

  messages: any[],

  language: string,

  sentiment: string

) {

  return Conversation.create({

    student: studentId,

    messages,

    language,

    sentiment,

  });

}