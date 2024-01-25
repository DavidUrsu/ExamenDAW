using Microsoft.AspNetCore.Mvc;
using ExamenDAW_API.Models;

namespace ExamenDAW_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AutorController : ControllerBase
    {
        private readonly ExamenDbContext _context;

        public AutorController(ExamenDbContext context)
        {
            _context = context;
        }

        // GET: api/Autor
        [HttpGet]
        public ActionResult<IEnumerable<AutorDTO>> GetAutor()
        {
            return _context.Autori
                .Select(a => new AutorDTO { AutorId = a.AutorId, Name = a.Name, EdituraId = a.EdituraId })
                .ToList();
        }

        // POST: api/Autor
        [HttpPost]
        [HttpPost]
        public ActionResult<Autor> PostAutor(AutorDTO autorDto)
        {
            var autor = new Autor { Name = autorDto.Name, EdituraId = autorDto.EdituraId };
            _context.Autori.Add(autor);
            _context.SaveChanges();

            return CreatedAtAction("GetAutor", new { id = autor.AutorId }, autor);
        }

    }
}