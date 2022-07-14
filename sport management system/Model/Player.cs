using System.ComponentModel.DataAnnotations;

namespace sport_management_system.Model
{
    public class Player
    {
        [Key]
        public int PlayerId { get; set; }
        [Required]
        public string playerName  { get; set; }
        [Required]
        public int age { get; set; }
        [Required]
        public long contactNumber { get; set; }
        [Required]
        public string email { get; set; }
        [Required]
        public string gender { get; set; }
        [Required]
        public string sportsName { get; set; }
    }
}