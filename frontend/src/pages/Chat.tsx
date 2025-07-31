import styles from "../styles/Chat.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import type { Bot } from "../types/Bot";
import api from "../services/api";
import { MessageBubble } from "../components/MessageBubble";

interface Mensagem {
  id: number;
  pergunta: string;
  resposta: string;
}

export function Chat() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bot, setBot] = useState<Bot | null>(null);
  const [mensagens, setMensagens] = useState<Mensagem[]>([]);
  const [pergunta, setPergunta] = useState("");
  const [digitando, setDigitando] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchBot() {
      const response = await api.get("/Bots");
      const foundBot = response.data.find((b: Bot) => b.id === Number(id));
      setBot(foundBot);
      setMensagens(foundBot?.mensagens || []);
    }

    fetchBot();
  }, [id]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensagens, digitando]);

  const enviarMensagem = async () => {
    if (!pergunta.trim() || !bot) return;

    const novaPergunta: Mensagem = {
      id: Date.now(),
      pergunta,
      resposta: "",
    };

    setMensagens((prev) => [...prev, novaPergunta]);
    setPergunta("");
    setDigitando(true);

    try {
      const response = await api.post("/Mensagens", {
        botId: bot.id,
        pergunta,
      });

      setTimeout(() => {
        setMensagens((prev) =>
          prev.map((msg) =>
            msg.id === novaPergunta.id ? response.data : msg
          )
        );
        setDigitando(false);
      }, 1500); // tempo que simula digitação
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setDigitando(false);
    }
  };

  if (!bot) return <div className={styles.chatContainer}>Carregando...</div>;

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          ⬅ Voltar
        </button>
        <h2>Chat com {bot.nome}</h2>
      </div>

      <div className={styles.chatMessages}>
        {mensagens.map((msg) => (
          <div key={msg.id}>
            <MessageBubble texto={msg.pergunta} autor="user" />
            {msg.resposta && (
              <MessageBubble texto={msg.resposta} autor="bot" nomeBot={bot.nome} />
            )}
          </div>
        ))}

        {digitando && (
          <MessageBubble texto={`${bot.nome} está digitando...`} autor="bot" nomeBot={bot.nome} />
        )}

        <div ref={chatEndRef} />
      </div>

      <div className={styles.chatInput}>
        <input
          type="text"
          value={pergunta}
          onChange={(e) => setPergunta(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              enviarMensagem();
            }
          }}
          placeholder="Digite sua pergunta..."
        />
        <button onClick={enviarMensagem}>Enviar</button>
      </div>
    </div>
  );
}
