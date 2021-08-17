using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SliceOfHeaven.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SliceOfHeaven.Controllers
{
    [ApiController]
    [Route("/auth")]
    public class UsersController: Controller, IUsersController
    {
        private readonly ILogger<UsersController> _logger;

        public UsersController(ILogger<UsersController> logger)
        {
            _logger = logger;
        }

        List<User> list = new()
        {
            new User { UserId = 1, Login = "Sam", Email = "sssss@dda.su", Password = "232342343345" },
            new User { UserId = 2, Login = "Jogn", Email = "sssdf@dda.su", Password = "sdfsd" },
            new User { UserId = 3, Login = "Lily", Email = "sdfdsf@dda.su", Password = "werwr" },
            new User { UserId = 4, Login = "Ban", Email = "fffffffffff@dda.su", Password = "ewrfeeee434f34g" },
        };

        [HttpGet("/auth/me")]
        public SubInfoUsers<User> Get()
        {
            return new SubInfoUsers<User>
            {
                Data = list,
                Orders = null,
                ResultCode = 0
            };
        }
    }
}
