import styles from "../styles/Chat.module.css";

interface MessageBubbleProps {
  texto: string;
  autor: "user" | "bot";
  nomeBot?: string;
}

export function MessageBubble({ texto, autor, nomeBot }: MessageBubbleProps) {
  return (
    <div className={autor === "user" ? styles.userMessage : styles.botMessage}>
      {autor === "bot" && nomeBot && (
        <div style={{ fontWeight: "bold", marginBottom: "0.3rem" }}>
          {nomeBot}
        </div>
      )}
      {texto}
    </div>
  );
}
