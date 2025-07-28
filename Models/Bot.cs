namespace ChatBotAPI.Models {
  public class Bot {
    public int Id { get; set; }
    public string Nome {get; set; }
    public string Descricao{ get; set; }
    public List<Mensagem> Mensagens { get; set; } = new();
  }
}