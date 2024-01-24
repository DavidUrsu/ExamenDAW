using Microsoft.AspNetCore.Mvc;
using ExamenDAW_API.Models;

namespace ExamenDAW_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MessageController : ControllerBase
    {
        private readonly ExamenDbContext _context;

        public MessageController(ExamenDbContext context)
        {
            _context = context;
        }

        //return all messages
        [HttpGet]
        public IActionResult GetMessages()
        {
            return Ok(_context.Messages);
        }

        //return message by id
        [HttpGet("{id}")]
        public IActionResult GetMessage(int id)
        {
            var message = _context.Messages.Find(id);
            if (message == null)
            {
                return NotFound();
            }
            return Ok(message);
        }

        //create message
        [HttpPost]
        public IActionResult CreateMessage(Message message)
        {
            _context.Messages.Add(message);
            _context.SaveChanges();
            return Ok(message);
        }

        //update message
        [HttpPut]
        public IActionResult UpdateMessage(Message message)
        {
            _context.Messages.Update(message);
            _context.SaveChanges();
            return Ok(message);
        }

        //delete message
        [HttpDelete("{id}")]
        public IActionResult DeleteMessage(int id)
        {
            var message = _context.Messages.Find(id);
            if (message == null)
            {
                return NotFound();
            }
            _context.Messages.Remove(message);
            _context.SaveChanges();
            return Ok(message);
        }
    }
}
