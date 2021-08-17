using SliceOfHeaven.Models;
using SliceOfHeaven.Parameters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SliceOfHeaven.Controllers
{
    interface IPizzaController
    {
        public SubInfoPizza<Pizza> Get(PizzaParams pizzaParams);
    }
}
