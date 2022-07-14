using System.ComponentModel.DataAnnotations;

namespace sport_management_system.Model
{
    public class User
    {
        [Key]
        public string Username { get; set; } = string.Empty;
        [Required]
        public byte[] PasswordHash { get; set; }
        [Required]
        public byte[] PasswordSalt { get; set; }
    }
}
