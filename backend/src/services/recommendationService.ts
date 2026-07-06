import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function generateRecommendations(student: any) {
  const prompt = `
Suggest:

1. Courses
2. Projects
3. Certifications
4. YouTube Channels
5. GitHub Repositories
6. Internship Tips

Career Goal:
${student.careerGoal}

Skills:
${student.skills.join(",")}

Interests:
${student.interests.join(",")}

Return only plain text.
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