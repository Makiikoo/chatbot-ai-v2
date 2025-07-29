using Microsoft.AspNetCore.Mvc;
using ChatBotAPI.Data;
using ChatBotAPI.Models;
using ChatBotAPI.Services;
using ChatBotAPI.Dtos;

namespace ChatBotAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MensagensController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly OpenAIService _openAIService;

        public MensagensController(AppDbContext context, OpenAIService openAIService)
        {
            _context = context;
            _openAIService = openAIService;
        }

         [HttpPost]
public async Task<IActionResult> EnviarMensagem([FromBody] MensagemCriacaoDto dto)
{
    var bot = _context.Bots.FirstOrDefault(b => b.Id == dto.BotId);
    if (bot == null)
        return NotFound("Bot não encontrado.");

    var mensagem = new Mensagem
    {
        Pergunta = dto.Pergunta,
        BotId = dto.BotId,
        Resposta = await _openAIService.EnviarParaOpenAIAsync(dto.Pergunta, bot.Descricao),
        Data = DateTime.Now
    };

    _context.Mensagens.Add(mensagem);
    await _context.SaveChangesAsync();

    return Ok(mensagem);
}
    }
}
