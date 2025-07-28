using Microsoft.EntityFrameworkCore; // ✅ NECESSÁRIO
using ChatBotAPI.Models; // para reconhecer Bot e Mensagem

namespace ChatBotAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}

        public DbSet<Bot> Bots { get; set; }
        public DbSet<Mensagem> Mensagens { get; set; }
    }
}
