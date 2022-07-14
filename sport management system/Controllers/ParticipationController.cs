using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using sport_management_system.Data;
using sport_management_system.Model;
using System.Linq;

namespace sport_management_system.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ParticipationController : ControllerBase
    {
        private readonly PlayerDbContext _context;

        public ParticipationController(PlayerDbContext context)
        {
            _context = context;
        }

        [HttpGet("/getParticipations")]
        public IEnumerable<Participation> Get()
        {
            return _context.Participations;
        }
        [HttpGet("id")]
        public IActionResult GetById(int Id)
        {
            var participant = _context.Participations.Find(Id);
            return participant == null ? NotFound() : Ok(participant);
        }
        [HttpPost("/addparticipation")]
        public IActionResult Create(Participation participation)
        {
            _context.Participations.Add(participation);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetById), new { name = participation.ParticipationId }, participation);
        }

        [HttpPut("/updateStatus")]
        public string update(Participation participation)
        {
            var origparticipant = _context.Participations.Find(participation.ParticipationId);
            origparticipant.playerName = participation.playerName;
            origparticipant.EventName = participation.EventName;
            origparticipant.Status = participation.Status;
            origparticipant.PlayerId = participation.PlayerId;
            origparticipant.EventId = participation.EventId;
            origparticipant.SportsName = participation.SportsName;
            origparticipant.sportsId= participation.sportsId;

            _context.Participations.Update(origparticipant);
            _context.SaveChanges();
            var response = "user updated";
            return JsonConvert.SerializeObject(response);
        }

        [HttpGet("/getDeclinedParticipations")]
        public IEnumerable<Participation> Declined()
        {
            return _context.Participations.Where(p => p.Status.Equals("Declined"));
        }

        [HttpGet("/getApprovedParticipations")]
        public IEnumerable<Participation> Approve()
        {
            return _context.Participations.Where(p => p.Status.Equals("Approved"));
        }
        [HttpGet("/getPendingParticipations")]
        public IEnumerable<Participation> Pending()
        {
            return _context.Participations.Where(p => p.Status.Equals("Pending"));
        }
    }
}
