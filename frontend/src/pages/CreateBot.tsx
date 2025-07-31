import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import styles from "../styles/CreateBot.module.css";

export function CreateBot() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleCriar = async () => {
    if (!nome.trim() || !descricao.trim()) {
      setErro("Preencha todos os campos!");
      return;
    }

    try {
      await api.post("/Bots", { nome, descricao });
      navigate("/");
    } catch (err) {
      console.error("Erro ao criar bot:", err);
      setErro("Erro ao criar bot.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Criar Novo Bot</h1>

        <input
          type="text"
          placeholder="Nome do Bot"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="text"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />

        {erro && <span className={styles.error}>{erro}</span>}

        <button onClick={handleCriar}>Criar</button>
        <button className={styles.back} onClick={() => navigate(-1)}>⬅ Voltar</button>
      </div>
    </div>
  );
}
