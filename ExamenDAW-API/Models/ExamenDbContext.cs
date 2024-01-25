using Microsoft.EntityFrameworkCore;

namespace ExamenDAW_API.Models
{
    public class ExamenDbContext : DbContext
    {
        public DbSet<Message> Messages { get; set; }
        public DbSet<Autor> Autori { get; set; }
        public DbSet<Carte> Carti { get; set; }
        public DbSet<CarteAutor> CarteAutori { get; set; }
        public DbSet<Editura> Edituri { get; set; } 

        public ExamenDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder); 

            modelBuilder.Entity<CarteAutor>()
                .HasKey(ca => new { ca.CarteId, ca.AutorId }); 

            modelBuilder.Entity<CarteAutor>()
                .HasOne(ca => ca.Carte)
                .WithMany(c => c.CarteAutors)
                .HasForeignKey(ca => ca.CarteId);

            modelBuilder.Entity<CarteAutor>()
                .HasOne(ca => ca.Autor)
                .WithMany(a => a.CarteAutors)
                .HasForeignKey(ca => ca.AutorId);

            modelBuilder.Entity<Autor>()
                .HasOne(a => a.Editura)
                .WithMany(e => e.Autors)
                .HasForeignKey(a => a.EdituraId); 
        }
    }
}