import { GoogleGenAI } from "@google/genai";

console.log("API Key:", process.env.GEMINI_API_KEY);

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function generateReply(
  message: string
) {
  const response =
    await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
      You are an AI career counsellor.

      Rules:
      - Be friendly.
      - Be supportive.
      - Help students choose careers.
      - Keep responses concise.
      - Focus on engineering, IT, careers, internships, skills and education.

      Student Query:
      ${message}
      `,
    });

  return (
    response.text ??
    "Sorry, I could not generate a response."
  );
}