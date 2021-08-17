using SliceOfHeaven.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SliceOfHeaven.Controllers
{
    interface IUsersController
    {
        public SubInfoUsers<User> Get();
    }
}
