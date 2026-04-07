import { groq } from "./groq.client.js";
import dotenv from "dotenv";

dotenv.config();

export async function callLLM(systemPrompt, userPrompt) {
  const response = await groq.chat.completions.create({
    model: process.env.MODEL,
    temperature: Number(process.env.TEMPERATURE),
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt }
    ]
  });

  return response.choices[0].message.content;
}