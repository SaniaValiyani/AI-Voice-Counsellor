import Groq from "groq-sdk";
import type { ChatCompletionMessageParam } from "groq-sdk/resources/chat/completions";

import {
  getMemory,
} from "./memoryService";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function generateReply(
  message: string,
  history: any[],
  profile: any,
  memory: any,
  settings: any
) {
const memoryContext = `
========================
STUDENT PROFILE
========================

AI Preferences

Language:
${settings?.language || "English"}

Personality:
${settings?.aiPersonality || "Friendly"}

Voice Rate:
${settings?.voiceRate ?? 1}

Voice Pitch:
${settings?.voicePitch ?? 1}

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

const longTermMemory =
  await getMemory(
    profile.email
  );

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

const personality = profile?.settings?.aiPersonality || "Friendly";

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

const personalityPrompt = `
AI Personality:
${personality}

Rules:

Friendly:
- Warm
- Encouraging
- Supportive

Professional:
- Formal
- Direct
- Precise

Motivational:
- High energy
- Inspiring
- Positive

Teacher:
- Explain concepts step by step
- Use simple examples
- Be educational
`;

const prompt = `
${memoryContext}

Long Term Memory

${longTermMemory.memories.join("\n")}

${personalityPrompt}

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
Response Format

Always structure your answers like this:

🚀 Quick Answer

Short explanation.

━━━━━━━━━━━━━━

📚 Resources

• Resource Name

Direct URL

━━━━━━━━━━━━━━

🎯 Next Action

One practical thing the student should do today.

━━━━━━━━━━━━━━

⭐ Pro Tip

One useful career tip.

Never use markdown tables.

Never use *

Never use **

Never use # headings.

Keep answers under 350 words.

Leave one blank line between sections.

Always answer in the preferred language.Adapt your tone according to the selected personality.

If personality is:

Friendly → Warm and encouraging.

Professional → Formal and structured.

Motivational → Energetic with actionable advice.

Concise → Keep answers brief and to the point.

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