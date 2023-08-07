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
            new User { UserId = 2, UserName = "User2" }
        };

        [HttpGet]
        public async Task<ActionResult<List<User>>> Get()
        {
            Console.WriteLine("Entro");
            return Ok(_users.AsQueryable());
        }
    }
}
