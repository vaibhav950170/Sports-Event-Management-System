using Microsoft.EntityFrameworkCore;
using sport_management_system.Model;
using SportEventMicroservice;

namespace sport_management_system.Data
{
    public class PlayerDbContext : DbContext
    {
        public PlayerDbContext(DbContextOptions<PlayerDbContext> options) : base(options) { }

        public DbSet<Player> Players { get; set; }
        public DbSet<Event> Events { get; set; }
        public DbSet<Sport> Sports { get; set; }
        public DbSet<Participation> Participations { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
