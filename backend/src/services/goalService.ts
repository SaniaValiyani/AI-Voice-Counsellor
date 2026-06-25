import Groq from "groq-sdk";

const groq = new Groq({
  apiKey:
    process.env.GROQ_API_KEY,
});

export async function generateGoals(
  careerGoal: string
) {

  const completion =
    await groq.chat.completions.create({
      model:
        "llama-3.3-70b-versatile",

      messages: [
        {
          role: "system",

          content: `
Generate exactly 5 learning goals.

Rules:

- Short goals
- Beginner friendly
- Career specific
- Return JSON only

Example:

[
 {
   "id":"1",
   "title":"Learn Python Basics",
   "completed":false
 }
]
`,
        },

        {
          role: "user",

          content: `
Career:
${careerGoal}
`,
        },
      ],

      temperature: 0.5,
    });

  const text =
    completion.choices[0]
      ?.message?.content ||
    "[]";

  return JSON.parse(text);
}