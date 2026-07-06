import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function generateWeeklyReport(student:any){

const prompt=`
Generate a Weekly Progress Report.

Student

XP:${student.xp}

Level:${student.level}

Career Readiness:${student.careerReadiness}

Skills:
${student.skills.join(",")}

Goals:
${student.goals.map((g: any) => `${g.title}:${g.completed}`).join("\n")}

Return

Summary

Strengths

Weaknesses

Next Week Targets

Motivation
`;

const completion=
await groq.chat.completions.create({

model:"llama-3.3-70b-versatile",

messages:[
{
role:"user",
content:prompt,
},
],

temperature:0.4,

});

return completion.choices[0].message.content;

}