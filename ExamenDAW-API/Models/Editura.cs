namespace ExamenDAW_API.Models
{
    public class Editura
    {
        public int EdituraId { get; set; }
        public string Name { get; set; }
        public ICollection<Autor> Autors { get; set; }
    }
}