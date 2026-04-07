import { runAgent } from "../core/agent.client.js";

export async function orientador(input) {
    return runAgent({
        promptFile: "orientador.md",
        input
    });
}