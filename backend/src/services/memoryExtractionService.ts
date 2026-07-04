import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function extractMemory(
  message: string
) {
const prompt = `
You extract long-term memory.

Save only facts that remain useful in future conversations.

Examples:

Career Goals

Skills

Interests

Weaknesses

Strengths

Favourite Subjects

Preferred Languages

Learning Style

Dream Company

Internship Goals

Never save:

Greetings

Thank you

Bye

Temporary questions

Current mood

Output:

One fact per line.

No bullets.

No numbering.

Message:

${message}
`;

  const completion =
    await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0.1,
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