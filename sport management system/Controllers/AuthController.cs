using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using sport_management_system.Data;
using sport_management_system.Model;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;

namespace sport_management_system.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        public static User user = new User();
        private readonly IConfiguration _configuration;
        private readonly PlayerDbContext _context;

        public AuthController(IConfiguration configuration,PlayerDbContext context)
        {
            _configuration = configuration;
            _context = context;
        }

        [HttpPost("register")]
        public string Register(UserDto request)
        {
            string response;
            string json;
            bool hasdata = _context.Users.Any(p => p.Username == request.UserName);
            if (hasdata==true)
            {
                response = "Username already exists";
                json = JsonConvert.SerializeObject(response);
                return json;
            }
            if (request.UserName.IsNullOrEmpty())
            {
                response = "Invalid username";
                json = JsonConvert.SerializeObject(response);
                return json;
            }
            else if (request.Password.IsNullOrEmpty())
            {
                response = "Invalid Password";
                json = JsonConvert.SerializeObject(response);
                return json;
            }
            CreatePasswordHash(request.Password, out byte[] passwordHash, out byte[] passwordSalt);

            user.Username = request.UserName;
            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;
            _context.Users.Add(user);
            _context.SaveChanges();
            return JsonConvert.SerializeObject("User Created");
        }

        [HttpPost("login")]
        public  string Login(UserDto request)
        {
            var response="";
            string json;
            bool hasdata = _context.Users.Any(p => p.Username == request.UserName);
            if(hasdata)
            {
                user = _context.Users.Where(b => b.Username.Equals(request.UserName)).First();
                if (!VerifyPasswordHash(request.Password, user.PasswordHash, user.PasswordSalt))
                {
                    response = "Invalid Password";
                    json = JsonConvert.SerializeObject(response);
                    return json;

                }
                string token = CreateToken(user);
                json=JsonConvert.SerializeObject(token);
                return json;

            }
            response = "User not found";
            json = JsonConvert.SerializeObject(response);

            return json;

            
        }
        [HttpPost("Adminlogin")]
        public string AdminLogin(UserDto request)
        {
            var response = "";
            string json;
            if (request.UserName == "admin123" && request.Password=="Admin@123")
            {
                response = "login";
                json = JsonConvert.SerializeObject(response);
                return json;
            }
            return JsonConvert.SerializeObject("Invalid Credentials");
        }


        private string CreateToken(User user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Username)
            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(
                _configuration.GetSection("AppSettings:Token").Value));

            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials:cred);

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }
        private void CreatePasswordHash(string password, out byte[] passwordHash,out byte[] passwordSalt)
        {
            using(var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using(var hmac = new HMACSHA512(passwordSalt))
            {
                var computeHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return computeHash.SequenceEqual(passwordHash);
            }
        }
    }
}
