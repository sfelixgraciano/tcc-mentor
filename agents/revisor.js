import { runAgent } from "../core/agent.client.js";

export async function revisor(input) {
    return runAgent({
        promptFile: "revisor.md",
        input
    });
}