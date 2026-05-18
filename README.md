# Quiz Interativo - Atividade PW
- Disciplina: Programação Web 
- Professor: Jeferson do Nascimento Soares
- ALUNO: Mateus de Araujo

Aplicação web de quiz interativo desenvolvida com React + TypeScript + Vite + Tailwind CSS.

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação das Dependências](#instalação-das-dependências)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Como Buildar o Projeto](#como-buildar-o-projeto)
- [Fluxo da Aplicação](#fluxo-da-aplicação)
- [Funcionalidades](#funcionalidades)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Scripts Disponíveis](#scripts-disponíveis)

## Sobre o Projeto

Este é um projeto de quiz interativo desenvolvido como atividade prática. A aplicação permite:
- Responder perguntas de múltipla escolha
- Visualizar resultados com porcentagem de acerto
- Gerenciar perguntas (adicionar, excluir, resetar)
- Persistência de dados usando LocalStorage

## Tecnologias Utilizadas

- **React 19.2.6** - Biblioteca para construção de interfaces
- **TypeScript 6.0.2** - Superset do JavaScript para tipagem
- **Vite 8.0.12** - Ferramenta de build e dev server
- **Tailwind CSS 4.3.0** - Framework CSS utility-first
- **React Router DOM 7.15.0** - Roteamento para React

## Instalação das Dependências

Antes de rodar o projeto, é necessário instalar as dependências. No terminal, execute:

```bash
npm install
```

## Como Executar o Projeto

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

## Como Buildar o Projeto

Para gerar a versão de produção otimizada:

```bash
npm run build
```

Os arquivos gerados estarão na pasta `dist/`.

## Fluxo da Aplicação

1. **Home** - Página inicial com botão para começar o quiz
2. **Quiz** - Página onde o usuário responde as perguntas (exibe número da pergunta atual)
3. **Resultado** - Página final com porcentagem de acerto, contagem de acertos/erros e mensagem motivacional
4. **Admin** - Página de administração para gerenciar perguntas (acessível via rota `/admin`)

## Funcionalidades

### Quiz
- Exibe pergunta com 4 alternativas
- Mostra número da pergunta atual (ex: "1 de 3")
- Feedback visual ao selecionar uma alternativa
- Navegação para próxima pergunta

### Resultado
- Porcentagem de acerto
- Contagem de acertos e erros
- Barra de progresso
- Mensagem motivacional personalizada por faixa de pontuação
- Botões para jogar novamente ou voltar ao início

### Admin
- Adicionar novas perguntas
- Excluir perguntas existentes
- Resetar para perguntas padrão
- Visualizar lista de todas as perguntas

### Persistência
- Todas as perguntas são salvas no LocalStorage na chave `@quiz_questions`
- Dados permanecem mesmo após fechar o navegador

## Estrutura de Pastas

```
AtividadePW-Quiz-/
├── public/
│   ├── logoQuiz.png
│   └── traced-brain.png
├── src/
│   ├── data/
│   │   └── dataMock.tsx          # Dados padrão das perguntas
│   ├── pages/
│   │   ├── adm.tsx               # Página de administração
│   │   ├── home.tsx              # Página inicial
│   │   ├── quiz.tsx              # Página do quiz
│   │   └── result.tsx            # Página de resultados
│   ├── routes/
│   │   └── routes.tsx            # Configuração de rotas
│   ├── ui/
│   │   ├── App.css
│   │   ├── App.tsx
│   │   └── index.css
│   └── main.tsx                  # Arquivo de entrada
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Cria o build de produção |
| `npm run lint` | Executa o linter ESLint |
| `npm run preview` | Visualiza o build de produção |

---

**Desenvolvido como atividade prática de Programação Web** 🎓
