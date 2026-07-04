import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function generateRoadmap(
  profile: any,
  memories: string[]
) {
  const prompt = `
You are an expert career mentor.

Create a COMPLETE learning roadmap.

Student

Career Goal:
${profile.careerGoal}

Education:
${profile.educationLevel}

Skills:
${profile.skills.join(", ")}

Interests:
${profile.interests.join(", ")}

Long Term Memory:
${memories.join("\n")}

Output format

Career Goal

Weeks

Topics

Projects

Resources

Milestones

Estimated Duration

Use emojis.

Do not use markdown.
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