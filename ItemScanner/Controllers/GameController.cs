using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ItemScanner.Models;
using ItemScanner.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace ItemScanner.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {

        private readonly IGameService _gameService;
        string sessionKey = "sk";
        private Users userList;

        public GameController(IGameService gameService)
        {
            _gameService = gameService;
        }



        [HttpPost("saveUserScore")]
        public IActionResult SaveUserScore([FromBody] User user)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var savedUsers = HttpContext.Session.GetString(sessionKey);
            if(savedUsers != null)
            {
               userList = JsonConvert.DeserializeObject<Users>(savedUsers);
            }
            else
            {
                userList = new Users();
            }

            userList =  _gameService.SaveUserScore(user, userList);

            //Save scanned list to session state
            HttpContext.Session.SetString(sessionKey, JsonConvert.SerializeObject(userList));

            //return Userscores
            var usersReturn = new List<User>();
            var userScores = new List<UserScore>();

            foreach (var userIn in userList.UsersSaved)
            {
                userScores = userIn.UserScores;
            }

            return Ok(userScores);
        }


    }
}