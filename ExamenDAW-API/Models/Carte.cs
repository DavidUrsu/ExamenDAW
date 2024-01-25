namespace ExamenDAW_API.Models
{
    public class Carte
    {
        public int CarteId { get; set; }
        public string Title { get; set; }
        public ICollection<CarteAutor> CarteAutors { get; set; }
    }
}