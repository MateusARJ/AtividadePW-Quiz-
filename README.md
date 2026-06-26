# 🧠 Quiz Interativo - Atividade PW

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

Aplicação web de quiz interativo e responsivo desenvolvida com React, TypeScript, Vite e Tailwind CSS, permitindo a criação, gerenciamento e resolução de perguntas.

### Informações da Disciplina
- **Disciplina:** Programação Web
- **Professor:** Jeferson do Nascimento Soares
- **ALUNO:** Mateus de Araujo

---

## 📑 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação das Dependências](#instalação-das-dependências)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Como Buildar o Projeto](#como-buildar-o-projeto)
- [Fluxo da Aplicação](#fluxo-da-aplicação)
- [Funcionalidades](#funcionalidades)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Scripts Disponíveis](#scripts-disponíveis)

## 💡 Sobre o Projeto

Este é um projeto de quiz interativo desenvolvido como atividade prática. A aplicação foi pensada em performance e usabilidade, com código otimizado e componentes funcionais modernos do React. A aplicação permite:
- 📝 Responder perguntas de múltipla escolha com navegação fluida
- 📊 Visualizar resultados com porcentagem de acerto e feedback em cores e emojis
- ⚙️ Gerenciar perguntas por meio da área admin (adicionar, excluir, resetar)
- 💾 Persistência de dados offline utilizando LocalStorage do navegador

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca para construção de interfaces orientadas a componentes
- **TypeScript 6** - Superset do JavaScript para segurança e tipagem estática
- **Vite 8** - Ferramenta de build extremamente rápida para o ambiente de desenvolvimento
- **Tailwind CSS 4** - Framework CSS utility-first que permite criação rápida de interfaces estilizadas e responsivas
- **React Router DOM 7** - Roteamento declarativo no lado do cliente

## ⚙️ Instalação das Dependências

Antes de rodar o projeto localmente, você precisará ter o [Node.js](https://nodejs.org/) instalado. No terminal, clone o repositório e execute:

```bash
npm install
```

## 💻 Como Executar o Projeto

### Modo Desenvolvimento

Para iniciar o servidor de desenvolvimento com hot reload:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173` (ou na porta indicada no terminal).

### Preview do Build

Para visualizar o resultado do build em produção:

```bash
npm run preview
```

## 📦 Como Buildar o Projeto

Para gerar a versão de produção otimizada:

```bash
npm run build
```

Os arquivos gerados estarão na pasta `dist/`.

## 🔄 Fluxo da Aplicação

1. **🏠 Home** - Página inicial com botão para começar o quiz
2. **🧠 Quiz** - Página onde o usuário responde as perguntas (exibe número da pergunta atual)
3. **🎯 Resultado** - Página final com porcentagem de acerto, contagem de acertos/erros e mensagem motivacional
4. **🔐 Admin** - Página de administração para gerenciar perguntas (acessível via rota `/admin`)

## ✨ Funcionalidades

### Quiz
- Exibe pergunta com 4 alternativas
- Mostra número da pergunta atual (ex: "1 de 3")
- Feedback visual interativo (highlight da alternativa)
- Navegação fluída para a próxima pergunta

### Resultado
- Cálculo e visualização de porcentagem de acertos
- Contagem exata de acertos e erros
- Barra de progresso responsiva
- Mensagem motivacional e emojis personalizados baseados no score final
- Botões de recomeçar rapidamente

### Admin
- Painel para adicionar novas perguntas customizadas
- Gerenciamento e exclusão de perguntas existentes
- Botão seguro para resetar às perguntas padrão de fábrica
- Visualização em lista em tempo real de todas as perguntas armazenadas

### Persistência
- Dados salvas perfeitamente e localmente por meio da chave `@quiz_questions` no `LocalStorage`.
- O progresso do banco de perguntas permanece mesmo ao fechar e abrir o navegador.

## 📁 Estrutura de Pastas

```text
AtividadePW-Quiz-/
├── public/
│   ├── logoQuiz.png
│   └── traced-brain.png
├── src/
│   ├── data/
│   │   └── dataMock.tsx          # Dados padrão das perguntas iniciais
│   ├── pages/
│   │   ├── adm.tsx               # Página de administração
│   │   ├── home.tsx              # Página inicial
│   │   ├── quiz.tsx              # Página do quiz principal
│   │   └── result.tsx            # Página de resultados finais
│   ├── routes/
│   │   └── routes.tsx            # Configuração de rotas (React Router)
│   ├── ui/
│   │   ├── App.css
│   │   ├── App.tsx               # Componente React central
│   │   └── index.css             # Estilos globais Tailwind
│   └── main.tsx                  # Arquivo de entrada da aplicação
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 📜 Scripts Disponíveis

| Comando | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o servidor Vite para desenvolvimento com HMR |
| `npm run build` | Cria o build final e otimizado para produção (`/dist`) |
| `npm run lint` | Analisa a base de código com o ESLint |
| `npm run preview` | Inicia um servidor local servindo a pasta `/dist` |

---

<div align="center">
  <b>Desenvolvido como atividade prática de Programação Web</b> 🎓
</div>
