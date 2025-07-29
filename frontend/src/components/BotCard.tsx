type BotCardProps = {
  nome: string;
  descricao: string;
};

export function BotCard({ nome, descricao }: BotCardProps) {
  return (
    <div style={{ border: "1px solid white", padding: "1rem", margin: "1rem 0", color: "white" }}>
      <h2>{nome}</h2>
      <p>{descricao}</p>
    </div>
  );
}
