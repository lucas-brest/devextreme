using back.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Formatter;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using System.Diagnostics.CodeAnalysis;

namespace back.Controllers
{
    //[Route("api/[controller]")]
    public class UserController : ControllerBase
    {

        private readonly List<User> _users = new List<User>
        {
            new User { UserId = 1, UserName = "User1" },
            new User { UserId = 2, UserName = "User2" },
            new User { UserId = 3, UserName = "User3" },
            new User { UserId = 4, UserName = "User0" },
            new User { UserId = 5, UserName = "User0" },
            new User { UserId = 6, UserName = "User6" },
            new User { UserId = 7, UserName = "Otro1" },
            new User { UserId = 8, UserName = "Otro2" }
        };

        [HttpGet]
        [EnableQuery]
        public IQueryable<User> Get()
        {
            return _users.AsQueryable();
        }

        [HttpDelete("user(UserId={userId})")]
        public IActionResult DeleteUser(int userId)
        {
            Console.WriteLine(userId);
            //var userToDelete = _users.FirstOrDefault(u => u.UserId == userId);

            //if (userToDelete == null)
            //{
            //    return NotFound();
            //}

            //_users.Remove(userToDelete);
            return NoContent();
        }
    }
}
