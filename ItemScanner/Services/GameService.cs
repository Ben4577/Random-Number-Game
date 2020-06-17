using ItemScanner.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ItemScanner.Services
{
    public class GameService : IGameService
    {

        public Users SaveUserScore(User user, Users usersList)
        {
            //create new Users list if not created ///
            if (usersList == null)
            {
                Users users = new Users();

                usersList.UsersSaved.Add(user);

                return usersList;
            }

            //list already has users////

            //find if the user is alreadsy in the list
            var foundUser = usersList.UsersSaved.Where(x => x.UserName == user.UserName).FirstOrDefault();

            //no existing user add to the list
            if(foundUser == null)
            {
                //add to the Users
                usersList.UsersSaved.Add(user);
            }
            else
            {
                UserScore userScore = new UserScore();
                userScore.TimeCompleted = user.UserScores[0].TimeCompleted;
                userScore.Date = user.UserScores[0].Date;

                foundUser.UserScores.Add(userScore);
            }

            return usersList;
        }




    }
}
