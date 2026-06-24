import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AQ.Ab8RN6KOU7T8gdAjpG7E8lXfROeVd8mJ1CDg1In1PguToabk1g",
});

async function run() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Hello",
  });

  console.log(response.text);
}

run().catch(console.error);