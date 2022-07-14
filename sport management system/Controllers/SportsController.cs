using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Web;
using sport_management_system.Data;

namespace SportEventMicroservice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SportsController : ControllerBase
    {
        private readonly PlayerDbContext _context;

        public SportsController(PlayerDbContext context)
        {
            _context = context;
        }

        [HttpGet("/sports")]
        public IEnumerable<Sport> Get()
        {
            return _context.Sports;
        }


        [HttpGet("/getSports")]
        public ActionResult<Sport> getSportsByName(string sportsName)
        {
          var sport = _context.Sports.SingleOrDefault(p => p.sportsName == sportsName);
          if (sport == null)
          {
              return NotFound();
          }
            return Ok(sport);
        }
    
    }
}
