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

Keep every list between 4 and 8 items.

Recommend only FREE learning resources.

Prefer Coursera, freeCodeCamp, roadmap.sh, MDN, Microsoft Learn, Google, Cisco Skills For All and official documentation whenever possible.

Never invent URLs.

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

  try{

  return JSON.parse(content);

  }

  catch{

  throw new Error("Groq returned invalid JSON");

  }
}