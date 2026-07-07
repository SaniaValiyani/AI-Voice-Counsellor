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

Return ONLY valid JSON in this format:

{
  "careerPaths": [],
  "skillsToLearn": [],
  "courses": [],
  "certifications": [],
  "projects": [],
  "resources": []
}
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

  return completion.choices[0]?.message?.content;
}