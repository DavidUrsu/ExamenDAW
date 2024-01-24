using Microsoft.EntityFrameworkCore;

namespace ExamenDAW_API.Models
{
    public class ExamenDbContext : DbContext
    {
        public DbSet<Message> Messages { get; set; }

        public ExamenDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder); // This is needed
        }
    }
}
