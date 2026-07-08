import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function generateRecommendations(student: any) {
const prompt = `
You are an expert career counsellor.

Student Profile:
Career Goal: ${student.careerGoal}
Education: ${student.educationLevel}
Skills: ${student.skills.join(", ")}
Interests: ${student.interests.join(", ")}
Strengths: ${student.strengths.join(", ")}
Weaknesses: ${student.weaknesses.join(", ")}

Return ONLY valid JSON.

The JSON MUST exactly match this schema:

{
  "careerPaths": ["string"],
  "skillsToLearn": ["string"],
  "courses": ["string"],
  "certifications": ["string"],
  "projects": ["string"],
  "resources": [
    {
      "title": "string",
      "url": "https://..."
    }
  ]
}

Do not include markdown.
Do not wrap the JSON in \`\`\`json.
Do not include any explanation.
Return ONLY the JSON object.
`;

  const completion =
    await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

  const content = completion.choices[0]?.message?.content;

  if (!content) {
    throw new Error("No response from Groq");
  }

  return JSON.parse(content);
}