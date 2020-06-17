using ItemScanner.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ItemScanner.Services
{
    public interface IGameService
    {
        public Users SaveUserScore(User user, Users usersList);
    }
}
