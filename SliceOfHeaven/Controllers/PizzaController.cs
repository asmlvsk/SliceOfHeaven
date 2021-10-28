using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SliceOfHeaven.Models;
using SliceOfHeaven.Parameters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SliceOfHeaven.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PizzaController : Controller, IPizzaController
    {
        private readonly ILogger<PizzaController> _logger;

        public PizzaController(ILogger<PizzaController> logger)
        {
            _logger = logger;
        }

        List<Pizza> list = new()
        {
            new Pizza { Id = 1, Name = "Peperoni", Size = 40, Ingridients = "Salami, Sause", Price=34.99m, Image= "https://sliceofheaven.pl/wp-content/uploads/2019/09/pepperoni-min.png", isActive=true},
            new Pizza { Id = 2, Name = "Margherita", Size = 30, Ingridients = "Cheeze", Price = 24.99m, Image = "https://sliceofheaven.pl/wp-content/uploads/2019/09/margherita-min.png", isActive = true },
            new Pizza { Id = 3, Name = "Prosciutto", Size = 30, Ingridients = "Peperoni, Maszrooms, Sause", Price = 34.99m, Image = "https://sliceofheaven.pl/wp-content/uploads/2019/09/prosciutto-min.png", isActive = true },
            new Pizza { Id = 4, Name = "Hawajska", Size = 40, Ingridients = "ananas, szynka", Price = 44.99m, Image = "https://sliceofheaven.pl/wp-content/uploads/2019/09/hawajska-min.png", isActive = true },
            new Pizza { Id = 5, Name = "Maiami", Size = 40, Ingridients = "kukurydza, pomidorki koktajlowe, szynka", Price = 30.99m, Image = "https://sliceofheaven.pl/wp-content/uploads/2019/09/maiami-min.png", isActive = true },
            new Pizza { Id = 6, Name = "Maiami", Size = 40, Ingridients = "kukurydza, pomidorki koktajlowe, szynka", Price = 31.99m, Image = "https://sliceofheaven.pl/wp-content/uploads/2019/09/maiami-min.png", isActive = true },
            new Pizza { Id = 7, Name = "Maiami", Size = 40, Ingridients = "kukurydza, pomidorki koktajlowe, szynka", Price = 24.99m, Image = "https://sliceofheaven.pl/wp-content/uploads/2019/09/maiami-min.png", isActive = true },
            new Pizza { Id = 8, Name = "Maiami", Size = 40, Ingridients = "kukurydza, pomidorki koktajlowe, szynka", Price = 54.99m, Image = "https://sliceofheaven.pl/wp-content/uploads/2019/09/maiami-min.png", isActive = true },
            new Pizza { Id = 9, Name = "Maiami", Size = 40, Ingridients = "kukurydza, pomidorki koktajlowe, szynka", Price = 34.99m, Image = "https://sliceofheaven.pl/wp-content/uploads/2019/09/maiami-min.png", isActive = true },
        };

        [HttpGet]
        public SubInfoPizza<Pizza> Get([FromQuery]PizzaParams pizzaParams)
        {
            var returnList = list
                .OrderBy(on => on.Id)
                .Skip((pizzaParams.PageNumber - 1) * pizzaParams.PageSize)
                .Take(pizzaParams.PageSize)
                .ToList();

            return new SubInfoPizza<Pizza>
            {
                Items = returnList,
                TotalCount = 10
            };
        }
    }
}
