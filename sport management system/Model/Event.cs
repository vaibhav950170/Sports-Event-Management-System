using System.ComponentModel.DataAnnotations;

namespace sport_management_system.Model
{
    public class Event
    {
        [Key]
        public int EventId { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public DateTime EventDate { get; set; }
        [Required]
        public string eventName { get; set; }
        [Required]
        public int noofslot { get; set; }
        [Required]
        public string sportname { get; set; }

    }
}
