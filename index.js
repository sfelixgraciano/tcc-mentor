import readline from "readline";
import { runTCCFlow } from "./core/orchestrator.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("🎓 TCC Mentor iniciado...\n");

rl.question("Digite sua solicitação (tema, texto, etc):\n> ", async (input) => {
    const result = await runTCCFlow(input);

    console.log("\n==============================");
    console.log("👨‍🏫 ORIENTADOR:\n", result.orientacao);

    console.log("\n📚 METODOLOGISTA:\n", result.metodologia);

    console.log("\n🔍 PESQUISADOR:\n", result.pesquisa);

    console.log("\n📝 REVISOR:\n", result.revisao);

    console.log("\n⚖️ AVALIADOR:\n", result.avaliacao);

    console.log("\n==============================");

    rl.close();
});