import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function generateRoadmap(
  profile: any,
  memories: string[]
) {
const prompt = `
You are an expert AI Career Mentor.

Create a personalized roadmap.

Student Details

Career Goal:
${profile.careerGoal}

Education:
${profile.educationLevel}

Skills:
${profile.skills.join(", ")}

Interests:
${profile.interests.join(", ")}

Previous Learning:
${memories.join("\n")}

The roadmap should include:

🎯 Career Goal

📚 Weekly Plan

🛠 Projects

📖 Learning Resources

🏆 Milestones

💡 Interview Preparation

📅 Estimated Duration

🎓 Final Outcome

Rules:

Keep the roadmap practical.

Suggest free resources.

Recommend projects.

Use emojis.

Do NOT use markdown.

Write in simple language.
`;

  const completion =
    await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      temperature: 0.4,

      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

  return (
    completion.choices[0]?.message?.content ||
    ""
  );
}