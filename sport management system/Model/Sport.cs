using System.ComponentModel.DataAnnotations;

namespace SportEventMicroservice
{
    public class Sport
    {
        [Key]
        public int sportsId { set; get; }
        public int noOfPlayers { set; get; }
        public string sportsName { set; get; }
        public string sportsType { set; get; }

    }
}
