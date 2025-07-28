using Microsoft.AspNetCore.Mvc;
using ChatBotAPI.Data;
using ChatBotAPI.Models;

namespace ChatBotAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BotsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public BotsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetBots()
        {
            var bots = _context.Bots.ToList();
            return Ok(bots);
        }

        [HttpPost]
        public IActionResult CreateBot([FromBody] Bot bot)
        {
            _context.Bots.Add(bot);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetBots), new { id = bot.Id }, bot);
        }
    }
}
