using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ItemScanner.Models
{
    public class Users
    {
        public Users()
        {
            UsersSaved = new List<User>();
        }
        public List<User> UsersSaved { get; set; }
    }
}
