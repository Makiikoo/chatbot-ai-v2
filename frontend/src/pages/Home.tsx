import { useEffect, useState } from "react";
import type { Bot } from "../types/Bot";
import api from "../services/api";
import { BotCard } from "../components/BotCard";



export function Home() {
  const [bots, setBots] = useState<Bot[]>([]);

  useEffect(() => {
    api.get("/Bots")
    .then((response) => {
      setBots(response.data);
    })
    .catch((error) => {
      console.error("Erro ao buscar bots:", error);
    });
  }, []);
  
  return (
    <div style ={{ padding: "2rem" }}>
      <h1 style={{ color: "white"}}>Lista de Bots</h1>
      {bots.map((bot) => (
        <BotCard key={bot.id} nome={bot.nome} descricao={bot.descricao} />
      ))}
    </div>
  );
}