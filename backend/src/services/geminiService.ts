import Groq from "groq-sdk";
import type { ChatCompletionMessageParam } from "groq-sdk/resources/chat/completions";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function generateReply(
  message: string,
  history: any[],
  profile: any,
  memory: any
) {
const memoryContext = `
========================
STUDENT PROFILE
========================

Career Goal:
${memory?.student?.careerGoal || profile?.careerGoal || "Unknown"}

Education Level:
${memory?.student?.educationLevel || profile?.educationLevel || "Unknown"}

Preferred Language:
${memory?.student?.preferredLanguage || profile?.preferredLanguage || "English"}

Skills:
${memory?.student?.skills?.join(", ") || profile?.skills?.join(", ") || "None"}

Interests:
${memory?.student?.interests?.join(", ") || profile?.interests?.join(", ") || "None"}

XP:
${memory?.student?.xp || 0}

Level:
${memory?.student?.level || 1}

Career Readiness:
${memory?.student?.careerReadiness || 0}%

Learning Streak:
${memory?.student?.learningStreak || 0}

Achievements:
${memory?.student?.achievements?.join(", ") || "None"}

Goals:
${
  memory?.student?.goals
    ?.map(
      (goal: any) =>
        `${goal.title} (${goal.completed ? "Completed" : "Pending"})`
    )
    .join("\n") || "None"
}
`;

const previousConversation = `
========================
PREVIOUS CONVERSATIONS
========================

${
  memory?.messages
    ?.map(
      (msg: any) =>
        `${msg.sender}: ${msg.message}`
    )
    .join("\n") || "No previous conversations."
}
`;

const importantFacts = `

IMPORTANT FACTS

${
memory?.memories

?.map(

(mem:any)=>

`${mem.category}: ${mem.value}`

)

.join("\n")

||"None"

}
`;

const prompt = `
${memoryContext}

${importantFacts}

${previousConversation}

You are an AI Career Counsellor for college students.

Your personality:

• Friendly
• Motivating
• Practical
• Encouraging

Rules:

• Continue previous conversations naturally.
• Never ask for information you already know.
• Refer to completed goals whenever relevant.
• Keep answers short and engaging.
• Use emojis only where helpful.
• Never use Markdown.
• Never use *
• Never use **
• Use the bullet symbol • instead of markdown bullets.
• Include direct URLs whenever recommending:
  • Courses
  • Certifications
  • Documentation
  • Internships
• Prefer numbered steps for action plans.
• Keep responses suitable for students with short attention spans.

Current Student Question:

${message}
`;

  const messages: ChatCompletionMessageParam[] = [
    {
      role: "system",
      content: prompt,
    },

    ...history
      .slice(-8)
      .map(
        (msg: any): ChatCompletionMessageParam => ({
          role:
            msg.sender === "user"
              ? "user"
              : "assistant",
          content: String(msg.message || ""),
        })
      ),

    {
      role: "user",
      content: message,
    },
  ];

  const completion =
    await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages,
      temperature: 0.7,
    });

  return (
    completion.choices[0]?.message?.content ||
    "Sorry, I couldn't generate a response."
  );
}