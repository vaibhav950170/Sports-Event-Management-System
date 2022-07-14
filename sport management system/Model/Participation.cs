using SportEventMicroservice;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace sport_management_system.Model
{
    public class Participation
    {
        [Key]
        public int ParticipationId { get; set; }
        [ForeignKey("Player")]
        public int PlayerId { get; set; }
        [Required]
        public string playerName { get; set; }

        [ForeignKey("Event")]
        public int EventId { get; set; }
        public string EventName { get; set; }

        [ForeignKey("Sport")]
        public int sportsId { get; set; }
        public string SportsName { get; set; }

        public string Status { get; set; }

    }
}
