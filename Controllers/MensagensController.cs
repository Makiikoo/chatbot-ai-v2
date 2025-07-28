using Microsoft.AspNetCore.Mvc;
using ChatBotAPI.Data;
using ChatBotAPI.Models;
using ChatBotAPI.Services;

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
        public async Task<IActionResult> EnviarMensagem([FromBody] Mensagem mensagem)
        {
            mensagem.Data = DateTime.Now;

            // 🔁 Chamada para OpenAI
            mensagem.Resposta = await _openAIService.EnviarParaOpenAIAsync(mensagem.Pergunta);

            _context.Mensagens.Add(mensagem);
            await _context.SaveChangesAsync();

            return Ok(mensagem);
        }
    }
}
