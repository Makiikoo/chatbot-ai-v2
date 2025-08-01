# 🤖 Chatbot AI - Projeto Fullstack (.NET 6 + React)

Este projeto é uma aplicação fullstack que permite criar e interagir com chatbots personalizados. Desenvolvido como parte de um desafio técnico para a HighCapital, ele simula a integração com a OpenAI (via mock) e apresenta uma interface amigável para conversar com bots com histórico persistente.

---

## 🎯 Objetivo do Projeto

Permitir que usuários:
- Criem seus próprios chatbots definindo nome e contexto.
- Interajam com os bots em uma interface de chat moderna.
- Visualizem e armazenem o histórico das conversas.

---

## ⚙️ Tecnologias Utilizadas

### 🔙 Backend
- **Linguagem**: C#
- **Framework**: .NET 6
- **ORM**: Entity Framework Core
- **Banco de Dados**: SQLite
- **API Simulada**: Mock do OpenAI (serviço interno `OpenAIService`)
- **AutoMapper**: Mapeamento entre entidades e DTOs
- **Swagger**: Documentação de endpoints REST

### 🔜 Frontend
- **Framework**: ReactJS
- **Ferramenta de Build**: Vite
- **Estilização**: CSS modular e custom properties (`:root`)
- **Gerenciamento de rotas**: React Router v6
- **HTTP Client**: Axios

---

## 📦 Funcionalidades

### ✅ Criação de Chatbot
- Nome do bot
- Contexto (descrição personalizada)

### ✅ Interação com o Chatbot
- Campo de texto para envio de mensagens
- Exibição da resposta (mockada)
- Scroll automático até a última mensagem
- Bot digitando (efeito visual)
- Validação de input vazio
- Tecla `Enter` para enviar mensagem

### ✅ Histórico de Conversa
- Armazenamento no banco de dados (mensagem e resposta)
- Visualização persistente por bot
- Botão de limpar histórico

### ✅ Lista de Bots
- Exibição de todos os bots cadastrados
- Navegação para conversar com bot
- Remoção individual de bots

---

## 🖼️ Interface do Usuário

- **Home (Lista de Bots)**: lista visual de bots com ações rápidas (conversar/deletar).
- **Criar Bot**: formulário limpo e validado com retorno visual de erros.
- **Chat com Bot**: layout full screen, bolhas de mensagens estilizadas e experiência fluida.

---

## 🧱 Estrutura do Projeto

### 🔍 Backend
```
ChatBotAPI/
├── Controllers/
│   ├── BotsController.cs
│   └── MensagensController.cs
├── Models/
│   ├── Bot.cs
│   └── Mensagem.cs
├── Dtos/
│   ├── BotDto.cs
│   ├── MensagemDto.cs
│   └── MensagemCriacaoDto.cs
├── Services/
│   └── OpenAIService.cs (Mock)
├── Mapping/
│   └── MappingProfile.cs
├── Data/
│   └── AppDbContext.cs
└── Program.cs
```

### 🌐 Frontend
```
src/
├── pages/
│   ├── Home.tsx
│   ├── CreateBot.tsx
│   └── Chat.tsx
├── components/
│   └── MessageBubble.tsx
├── styles/
│   ├── Home.module.css
│   ├── Chat.module.css
│   └── CreateBot.module.css
├── services/
│   └── api.ts
├── types/
│   └── Bot.ts
└── main.tsx
```

---

## 🚀 Como Rodar Localmente

### 1️⃣ Backend (.NET)
```bash
cd ChatBotAPI
dotnet ef database update    # Garante que o banco SQLite seja criado
dotnet run
```
- API: http://localhost:5166
- Swagger: http://localhost:5166/swagger

### 2️⃣ Frontend (React + Vite)
```bash
cd chatbot-ai-frontend
npm install
npm run dev
```
- Frontend: http://localhost:5173

---

## 📄 Considerações

- O projeto simula a integração com OpenAI para fins de teste offline.
- Código modularizado com componentes reutilizáveis e boas práticas de arquitetura.
- Cores, mensagens e inputs com foco em acessibilidade e UX.
- Adaptado para expansão futura com suporte real à API GPT (basta substituir o `OpenAIService.cs`).

---

## ✅ Checklist do Desafio

| Requisito                                 | Atendido ✅ |
|------------------------------------------|-------------|
| Criar bot com nome e contexto            | ✅          |
| Enviar mensagem e receber resposta       | ✅ (Mock)   |
| Exibir histórico e limpar mensagens      | ✅          |
| Estrutura banco com bots e mensagens     | ✅          |
| Interface web amigável e responsiva      | ✅          |
| Componentização e separação lógica       | ✅          |
| README documentado                       | ✅          |
| Código limpo e comentado                 | ✅          |

---

## 🌟 Futuras Melhorias

- Integração com API real da OpenAI (`gpt-3.5-turbo`)
- Armazenamento em PostgreSQL ou SQL Server
- Testes unitários com xUnit e Jest
- Autenticação de usuários
- Suporte a múltiplos idiomas

---

## 👨‍💻 Desenvolvedor

**Nome:** Ewerton Campos Junior  
**LinkedIn:** [linkedin.com/in/juniorcamposdev](https://www.linkedin.com/in/juniorcamposdev/)  
**GitHub:** [github.com/Makiikoo](https://github.com/Makiikoo)  
**E-mail:** juniorbio20@gmail.com

---