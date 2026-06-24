import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function generateRoadmap(
  career: string
) {
  const completion =
    await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      messages: [
        {
          role: "system",
          content: `
You are an expert AI Career Counsellor.

Generate student-friendly career roadmaps.

Rules:
- Use phases.
- Use bullet points.
- Use emojis.
- Keep concise.
- Mention skills.
- Mention projects.
- Mention internships.
- Mention certifications.
- Never use markdown.
- Never use * or **.
`,
        },
        {
          role: "user",
          content: `Generate a roadmap for: ${career}`,
        },
      ],

      temperature: 0.7,
    });

  return (
    completion.choices[0]?.message?.content ||
    "No roadmap available"
  );
}