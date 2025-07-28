namespace ChatBotAPI.Models
{
  public class Mensagem
  {
    public int Id { get; set; }
    public int BotId { get; set; }
    public Bot? Bot { get; set; }
    public string Pergunta { get; set; }
    public string?  Resposta { get; set; }
    public DateTime Data { get; set; }
  }
}