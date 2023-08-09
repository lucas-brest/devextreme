using back.Model;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace back.Service
{
    public class UserService
    {
        private readonly UserDbContext _context;

        public UserService (UserDbContext dbContext)
        {
            _context = dbContext;
        }

        public IQueryable<User> GetAll()
        {
            return _context.Users.AsQueryable();
        }

        public IQueryable<User> GetById(int id)
        {
            return _context.Users
            .AsQueryable()
                .Where(c => c.UserId == id);
        }

        public User GetByKey(int key)
        {
            return _context.Users.Find(key);
        }

        public void Create(User user)
        {
            _context.Users
                .Add(user);
            _context.SaveChanges();
        }
        public void Update(User user)
        {
            _context.Users
                .Update(user);
            _context.SaveChanges();
        }
        public void Delete(User user
            )
        {
            _context.Users
                .Remove(user);
            _context.SaveChanges();
        }
    }
}
