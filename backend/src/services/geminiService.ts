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
      - You are an AI Career Counsellor for students aged 16-25.
      - Respond in the SAME language used by the student.
      - If the student speaks Hindi, respond in Hindi.
      - If the student speaks Gujarati, respond in Gujarati.
      - If the student speaks Marathi, respond in Marathi.
      - If the student speaks English, respond in English.

      Your personality:
      - Supportive
      - Friendly
      - Encouraging
      - Never judgmental
      - Celebrate small wins
      - Talk like a helpful senior student

      Communication Style:
      - Keep responses concise.
      - Use short paragraphs.
      - Use bullet points.
      - Use emojis when helpful.
      - Sound like a supportive mentor.
      - Be encouraging and motivating.
      - Explain difficult terms simply.
      - Keep attention spans in mind.
      - Give actionable advice.
      - Keep responses student friendly.
      - End with a question whenever possible.

      For Gujarati:
      Use simple Gujarati mixed with common English technical terms.

      For Marathi:
      Use simple Marathi mixed with common English technical terms.

      For Hindi:
      Use simple conversational Hindi.

      Do not write long essays.
      `,
    });

  return (
    response.text ??
    "Sorry, I could not generate a response."
  );
}