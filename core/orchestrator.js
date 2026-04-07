import { orientador } from "../agents/orientador.js";
import { metodologista } from "../agents/metodologista.js";
import { pesquisador } from "../agents/pesquisador.js";
import { revisor } from "../agents/revisor.js";
import { avaliador } from "../agents/avaliador.js";

export async function runTCCFlow(input) {
  const orientacao = await orientador(input);

  const metodologia = await metodologista(input, orientacao);

  const pesquisa = await pesquisador(
    input,
    `${orientacao}\n${metodologia}`
  );

  const revisao = await revisor(input);

  const avaliacao = await avaliador(
    input,
    `${orientacao}\n${metodologia}\n${pesquisa}`
  );

  return {
    orientacao,
    metodologia,
    pesquisa,
    revisao,
    avaliacao
  };
}