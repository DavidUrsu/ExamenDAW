using Microsoft.AspNetCore.Mvc;
using ExamenDAW_API.Models;

namespace ExamenDAW_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarteController : ControllerBase
    {
        private readonly ExamenDbContext _context;

        public CarteController(ExamenDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<CarteDTO>> GetCarte()
        {
            return _context.Carti
                .Select(c => new CarteDTO { CarteId = c.CarteId, Title = c.Title })
                .ToList();
        }

        [HttpPost]
        public ActionResult<Carte> PostCarte(CarteDTO carteDto)
        {
            var carte = new Carte { Title = carteDto.Title };
            _context.Carti.Add(carte);
            _context.SaveChanges();

            return CreatedAtAction("GetCarte", new { id = carte.CarteId }, carte);
        }

        [HttpGet("Autor")]
        public ActionResult<IEnumerable<CarteAutorDTO>> GetCarteAutor()
        {
            return _context.CarteAutori
                .Select(ca => new CarteAutorDTO { AutorId = ca.AutorId, CarteId = ca.CarteId })
                .ToList();
        }

        [HttpPost("Autor")]
        public ActionResult AddAutor(CarteAutorDTO carteAutorDto)
        {
            var carteAutor = new CarteAutor { AutorId = carteAutorDto.AutorId, CarteId = carteAutorDto.CarteId };
            _context.CarteAutori.Add(carteAutor);
            _context.SaveChanges();

            return Ok();
        }
    }
}