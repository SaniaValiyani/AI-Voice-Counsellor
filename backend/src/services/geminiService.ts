import Groq from "groq-sdk";
import type { ChatCompletionMessageParam } from "groq-sdk/resources/chat/completions";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function generateReply(
  message: string,
  history: any[],
  profile: any
) {
  const memoryContext = `
Student Profile

Career Goal:
${profile?.careerGoal || "Unknown"}

Education Level:
${profile?.educationLevel || "Unknown"}

Preferred Language:
${profile?.preferredLanguage || "English"}

Skills:
${profile?.skills?.join(", ") || "None"}

Interests:
${profile?.interests?.join(", ") || "None"}
`;

  const prompt = `
${memoryContext}

You are an AI Career Counsellor.

Memory Rules:

- Use the student's profile whenever relevant.
- Do not ask for information already known.
- Keep responses concise.
- Use emojis.
- Use bullet symbol •
- Never use markdown.
- Never use *
- Never use **
- Include direct URLs for resources.
- Be student friendly.

Student Message:
${message}
`;

  const messages: ChatCompletionMessageParam[] = [
    {
      role: "system",
      content: prompt,
    },

    ...history.map(
      (msg: any): ChatCompletionMessageParam => ({
        role:
          msg.sender === "user"
            ? "user"
            : "assistant",
        content: String(msg.message || ""),
      })
    ),

    {
      role: "user",
      content: message,
    },
  ];

  const completion =
    await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages,
      temperature: 0.7,
    });

  return (
    completion.choices[0]?.message?.content ||
    "Sorry, I couldn't generate a response."
  );
}