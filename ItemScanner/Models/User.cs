using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ItemScanner.Models
{
    public class User
    {
        public User()
        {
            UserScores = new List<UserScore>();
        }

        public int UserId { get; set; }

        public string UserName { get; set; }

        public List<UserScore> UserScores { get; set; }

    }
}
