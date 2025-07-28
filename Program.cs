using Microsoft.EntityFrameworkCore;
using ChatBotAPI.Data;
using ChatBotAPI.Services;

var builder = WebApplication.CreateBuilder(args);

// ✅ Configura o DbContext com SQLite
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=chatbot.db"));

builder.Services.AddScoped<OpenAIService>();

//  Ativa suporte a controllers e API
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Middleware
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();

// ✅ Ativa os controllers que você vai criar (ex: BotController)
app.MapControllers();

app.Run();
