import { runAgent } from "../core/agent.client.js";

export async function pesquisador(input, context) {
  return runAgent({
    promptFile: "pesquisador.md",
    input,
    context
  });
}