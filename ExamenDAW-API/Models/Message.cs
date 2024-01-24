namespace ExamenDAW_API.Models
{
    public class Message
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public DateTime CreatedAt { get; set; }

        public Message()
        {
            CreatedAt = DateTime.Now;
        }
    }
}
