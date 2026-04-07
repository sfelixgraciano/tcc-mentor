# 🎓 TCC Mentor

![Node.js](https://img.shields.io/badge/node-%3E%3D18-green)
![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-educational-orange)
![AI](https://img.shields.io/badge/AI-multi--agent-purple)

Sistema multiagente para apoio à construção de Trabalhos de Conclusão de Curso (TCC), utilizando LLMs via Groq.

🔗 **Repositório:**
https://github.com/sfelixgraciano/tcc-mentor

---

## 🧠 Overview

O **TCC Mentor** é um sistema baseado em múltiplos agentes de IA que simula uma banca acadêmica para auxiliar estudantes na construção de seus TCCs.

O sistema promove:

* pensamento crítico
* escrita acadêmica
* aprendizado orientado
* iteração contínua

---

## 🏗️ Arquitetura

O sistema segue o padrão de **multiagente com orquestração central**:

```text id="j0a9w1"
Usuário → Orquestrador → Agentes Especializados
                         ├── Orientador
                         ├── Metodologista
                         ├── Pesquisador
                         ├── Revisor
                         └── Avaliador
```

Cada agente possui:

* prompt especializado
* função específica
* responsabilidade bem definida

---

## 👥 Agentes

| Agente           | Responsabilidade                      |
| ---------------- | ------------------------------------- |
| 👨‍🏫 Orientador | Guia o aluno e estrutura o raciocínio |
| 📚 Metodologista | Define abordagem científica           |
| 🔍 Pesquisador   | Sugere base teórica                   |
| 📝 Revisor       | Ajusta linguagem e clareza            |
| ⚖️ Avaliador     | Realiza crítica e atribui nota        |

---

## ⚠️ Princípios do Sistema

* ❌ Não gera TCC completo automaticamente
* ✅ Foco em orientação e aprendizado
* ⚠️ Pode conter imprecisões (use senso crítico)

---

## 🚀 Getting Started

### 1. Clone o repositório

```bash id="n3r9h2"
git clone https://github.com/sfelixgraciano/tcc-mentor.git
cd tcc-mentor
```

---

### 2. Instale as dependências

```bash id="bpmc2x"
npm install
```

---

### 3. Configure variáveis de ambiente

Crie um arquivo `.env`:

```env id="7u8d6g"
GROQ_API_KEY=your_api_key_here
```

---

### 4. Execute o projeto

```bash id="cnbf47"
node index.js
```

---

## 💻 Usage

Exemplos de entrada:

```text id="d0a8d4"
Tema: Inteligência Artificial aplicada à educação
```

```text id="5z7bqk"
Revise minha introdução:
[cole seu texto aqui]
```

O sistema retornará respostas estruturadas por agente.

---

## 🔄 Workflow Recomendado

1. Definir tema
2. Refinar problema
3. Estruturar metodologia
4. Escrever seções
5. Revisar e iterar

---

## 📂 Estrutura do Projeto

```bash id="0qmnv7"
.
├── agents/
├── core/
├── config/
├── index.js
├── package.json
└── .env
```

---

## 🧪 Exemplos de Uso

* Definição de tema
* Revisão de texto
* Avaliação de seção
* Sugestão de metodologia

---

## 🎓 Contexto Educacional

Este projeto foi desenvolvido para ensino de:

* Inteligência Artificial aplicada
* Sistemas multiagentes
* Engenharia de software
* Escrita acadêmica

---

## 💡 Roadmap

* [ ] Interface web (React / Express)
* [ ] Memória persistente
* [ ] Sistema de pontuação por seção
* [ ] Modo banca interativa
* [ ] Integração com base de artigos (RAG)

---

## 🤝 Contribuição

Contribuições são bem-vindas.

Sugestões:

* novos agentes
* melhoria de prompts
* novas features

---

## 📜 Licença

MIT License

---

## ⚡ Observação Final

Este projeto não substitui orientação acadêmica real.

Use como ferramenta de apoio — não como solução final.

