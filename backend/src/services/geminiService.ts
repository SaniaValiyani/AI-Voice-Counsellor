import { GoogleGenAI } from "@google/genai";

console.log("API Key:", process.env.GEMINI_API_KEY);

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function generateReply(
  message: string,
  history: any[]
) {
  const previousConversation =
    history
      .map(
        (msg) =>
          `${msg.sender}: ${msg.message}`
      )
      .join("\n");

  const response =
    await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
      You are an AI career counsellor.

      Previous Conversation:
      ${previousConversation}

      Current Student Message:
      ${message}

      Rules:
      - Be friendly
      - Be concise
      - Give practical guidance
      - Help with careers, internships,
        engineering, skills and education.
      `,
    });

  return (
    response.text ??
    "Sorry, I could not generate a response."
  );
}