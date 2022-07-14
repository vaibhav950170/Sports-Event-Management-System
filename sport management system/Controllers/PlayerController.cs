using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using sport_management_system.Data;
using sport_management_system.Model;

namespace sport_management_system.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlayerController : ControllerBase
    {
        private readonly PlayerDbContext _context;

        public PlayerController(PlayerDbContext context)
        {
            _context = context;
        }

        [HttpGet("/players")]
        public IEnumerable<Player> Get()
        {
            return _context.Players;
        }

        [HttpGet("id")]
        public IActionResult GetById(int Id)
        {
            var player = _context.Players.Find(Id);
            return player == null ? NotFound() : Ok(player);
        }

        [HttpPost("/addPlayer")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public IActionResult Create(Player player)
        {
            _context.Players.Add(player);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetById),new {name = player.PlayerId},player);
        }
        [HttpDelete("/deletePlayer")]
        public IActionResult Delete(string email)
        {
            bool hasdata = _context.Players.Any(p => p.email == email);
            if (hasdata)
            {
                var player = _context.Players.Where(b => b.email.Equals(email)).First();
                _context.Remove(player);
                _context.SaveChanges();
                return player == null ? NotFound() : Ok(player);
            }
            else
            {
                return hasdata == false ? NotFound() : Ok(hasdata);
            }
        }
            
    }
}
