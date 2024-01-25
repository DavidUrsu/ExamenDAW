namespace ExamenDAW_API.Models
{
    public class CarteAutor
    {
        public int AutorId { get; set; }
        public Autor Autor { get; set; }

        public int CarteId { get; set; }
        public Carte Carte { get; set; }
    }
}