using Microsoft.AspNetCore.Mvc;
using ExamenDAW_API.Models;

namespace ExamenDAW_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EdituraController : ControllerBase
    {
        private readonly ExamenDbContext _context;

        public EdituraController(ExamenDbContext context)
        {
            _context = context;
        }

        // GET: api/Editura
        [HttpGet]
        public ActionResult<IEnumerable<EdituraDTO>> GetEditura()
        {
            return _context.Edituri
                .Select(e => new EdituraDTO { EdituraId = e.EdituraId, Name = e.Name })
                .ToList();
        }

        // POST: api/Editura
        [HttpPost]
        public ActionResult<Editura> PostEditura(EdituraDTO edituraDto)
        {
            var editura = new Editura { Name = edituraDto.Name };
            _context.Edituri.Add(editura);
            _context.SaveChanges();

            return CreatedAtAction("GetEditura", new { id = editura.EdituraId }, editura);
        }
    }
}