import { runAgent } from "../core/agent.client.js";

export async function metodologista(input, context) {
    return runAgent({
        promptFile: "metodologista.md",
        input,
        context
    });
}