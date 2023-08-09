using back.Model;
using back.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Deltas;
using Microsoft.AspNetCore.OData.Formatter;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using System.Diagnostics.CodeAnalysis;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace back.Controllers
{
    //[Route("api/[controller]")]
    public class UserController : ControllerBase
    {

        private readonly UserService _users;

        public UserController(UserService userService)
        {
            _users = userService;
        }

        [HttpGet]
        [EnableQuery]
        public IQueryable<User> Get()
        {
            return _users.GetAll();
        }

        [HttpDelete]
        public IActionResult Delete([FromODataUri] int key)
        {
            var userToDelete = _users.GetById(key);

            if (userToDelete == null)
            {
                return NotFound();
            }

            _users.Delete(userToDelete.First());
            return NoContent();
        }

        [HttpPost]
        public IActionResult Post([FromBody] User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _users.Create(user);
            return Created("User", user);
        }

        [HttpPut]
        public IActionResult Put([FromODataUri] int key, [FromBody] User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (key != user.UserId)
            {
                return BadRequest();
            }
            _users.Update(user);
            return NoContent();
        }

        [HttpPatch]
        public IActionResult Patch([FromODataUri] int key, [FromBody] Delta<User> userDelta)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            User existingUser = _users.GetByKey(key);

            if (existingUser == null)
            {
                return NotFound();
            }

            userDelta.Patch(existingUser);
            _users.Update(existingUser);

            return NoContent();
        }
    }
}
