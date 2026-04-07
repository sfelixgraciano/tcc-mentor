import { callLLM } from "../core/llm.client.js";
import { loadPrompt } from "../core/prompt-loader.client.js";

export async function runAgent({ promptFile, input, context = "" }) {
  const prompt = loadPrompt(promptFile);

  const finalInput = context
    ? `${input}\n\nContexto adicional:\n${context}`
    : input;

  return callLLM(prompt, finalInput);
}