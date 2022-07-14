using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using sport_management_system.Data;
using sport_management_system.Model;
using System.Linq;

namespace sport_management_system.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly PlayerDbContext _context;

        public EventController(PlayerDbContext context)
        {
            _context = context;
        }

        [HttpPost("/addEvent")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public IActionResult Create(Event eventr)
        {
            _context.Events.Add(eventr);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetById), new { name = eventr.EventId }, eventr);
        }

        [HttpDelete("/deleteEvent")]
        public IActionResult Delete(int EventId)
        {
            var dltevnt = _context.Events.Where(b => b.EventId.Equals(EventId)).First();
            var particpant = _context.Participations.Where(b => b.EventId.Equals(EventId));
           /* if (particpant.Any())
            {
                _context.(particpant);
                _context.SaveChanges();
            }*/

            _context.Remove(dltevnt);
            _context.SaveChanges();

            return dltevnt == null ? NotFound() : Ok(dltevnt);
        }

        [HttpGet("/events")]
        public IEnumerable<Event> Get()
        {
            return _context.Events;
        }

        [HttpGet("/eventsByname")]
        public IActionResult GetById(string name)
        {
            var fevent = _context.Events.Where(b => b.eventName.Equals(name)).First();
            return fevent == null ? NotFound() : Ok(fevent);
        }






    }
}
