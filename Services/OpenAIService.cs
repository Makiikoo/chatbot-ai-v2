namespace ChatBotAPI.Services
{
    public class OpenAIService
    {
        public async Task<string> EnviarParaOpenAIAsync(string pergunta, string contexto = "Você é um assistente útil.")
        {
            await Task.Delay(300); // simula tempo de resposta

            var respostasSimuladas = new List<string>
            {
                "Claro! Vou te ajudar com isso.",
                "Ótima pergunta, vamos lá...",
                "Aqui está uma explicação rápida:",
                "Isso depende de alguns fatores...",
                "A resposta é simples: sim.",
                "A resposta é não, e aqui está o porquê..."
            };

            var rnd = new Random();
            var escolha = respostasSimuladas[rnd.Next(respostasSimuladas.Count)];

            return $"[{contexto}]\n➡️ {escolha} (para a pergunta: \"{pergunta}\")";
        }
    }
}