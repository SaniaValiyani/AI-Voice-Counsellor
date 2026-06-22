import { GoogleGenAI }
from "@google/genai";

const ai =
  new GoogleGenAI({
    apiKey:
      process.env.GEMINI_API_KEY!,
  });

export async function generateRoadmap(
  career: string
) {
  const response =
    await ai.models.generateContent({
      model:
        "gemini-2.5-flash",

      contents: `
Generate a student-friendly roadmap for:

${career}

Rules:

- Use phases.
- Use bullet points.
- Use emojis.
- Keep concise.
- Mention skills.
- Mention projects.
- Mention internships.
- Mention certifications.

Format clearly.
`,
    });

  return (
    response.text ??
    "No roadmap available"
  );
}