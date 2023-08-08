using back.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
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
        public ActionResult<IQueryable<List<User>>> Get()
        {
            return Ok(_users.AsQueryable());
        }
    }
}
