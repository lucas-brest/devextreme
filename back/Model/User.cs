using System.ComponentModel.DataAnnotations;

namespace back.Model
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        [Required]
        public string UserName { get; set; }
    }
}
