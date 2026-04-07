import { runAgent } from "../core/agent.client.js";

export async function avaliador(input, context) {
  return runAgent({
    promptFile: "avaliador.md",
    input,
    context
  });
}