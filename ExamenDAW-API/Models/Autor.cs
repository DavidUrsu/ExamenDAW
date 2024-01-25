namespace ExamenDAW_API.Models
{
    public class Autor
    {
        public int AutorId { get; set; }
        public string Name { get; set; }
        public ICollection<CarteAutor> CarteAutors { get; set; }
        public int EdituraId { get; set; } // New field
        public Editura Editura { get; set; } // New field
    }
}