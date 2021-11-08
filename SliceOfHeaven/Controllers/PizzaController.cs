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
            new Pizza { Id = 1, Name = "Peperoni", Category = "Pizza", Size = 40, Ingridients = "Salami, Sause", Price=34.99m, Image= "https://sliceofheaven.pl/wp-content/uploads/2019/09/pepperoni-min.png", isActive=true},
            new Pizza { Id = 2, Name = "Margherita", Category = "Pizza Wege", Size = 30, Ingridients = "Cheeze", Price = 24.99m, Image = "https://sliceofheaven.pl/wp-content/uploads/2019/09/margherita-min.png", isActive = true },
            new Pizza { Id = 3, Name = "Prosciutto", Category = "Pizza", Size = 30, Ingridients = "Peperoni, Maszrooms, Sause", Price = 34.99m, Image = "https://sliceofheaven.pl/wp-content/uploads/2019/09/prosciutto-min.png", isActive = true },
            new Pizza { Id = 4, Name = "Hawajska", Category = "Pizza", Size = 40, Ingridients = "ananas, szynka", Price = 44.99m, Image = "https://sliceofheaven.pl/wp-content/uploads/2019/09/hawajska-min.png", isActive = true },
            new Pizza { Id = 5, Name = "Maiami", Category = "Pizza", Size = 40, Ingridients = "kukurydza, pomidorki koktajlowe, szynka", Price = 30.99m, Image = "https://sliceofheaven.pl/wp-content/uploads/2019/09/maiami-min.png", isActive = true },
            new Pizza { Id = 6, Name = "Maiami", Category = "Pizza Weg", Size = 40, Ingridients = "kukurydza, pomidorki koktajlowe, szynka", Price = 31.99m, Image = "https://sliceofheaven.pl/wp-content/uploads/2019/09/maiami-min.png", isActive = true },
            new Pizza { Id = 7, Name = "Maiami", Category = "Pizza Weg", Size = 40, Ingridients = "kukurydza, pomidorki koktajlowe, szynka", Price = 24.99m, Image = "https://sliceofheaven.pl/wp-content/uploads/2019/09/maiami-min.png", isActive = true },
            new Pizza { Id = 8, Name = "Maiami", Category = "Pizza Weg", Size = 40, Ingridients = "kukurydza, pomidorki koktajlowe, szynka", Price = 54.99m, Image = "https://sliceofheaven.pl/wp-content/uploads/2019/09/maiami-min.png", isActive = true },
            new Pizza { Id = 9, Name = "Maiami", Category = "Pizza", Size = 40, Ingridients = "kukurydza, pomidorki koktajlowe, szynka", Price = 34.99m, Image = "https://sliceofheaven.pl/wp-content/uploads/2019/09/maiami-min.png", isActive = true },
            new Pizza { Id = 10, Name = "Makarony1", Category = "Makarony", Size = 40, Ingridients = "Makarony1 Makarony1 Makarony1 Makarony1", Price = 34.99m, Image = "https://sliceofheaven.pl/wp-content/uploads/2019/09/maiami-min.png", isActive = true },
            new Pizza { Id = 11, Name = "Makarony1", Category = "Makarony", Size = 40, Ingridients = "Makarony1 Makarony1 Makarony1 Makarony1", Price = 34.99m, Image = "https://sliceofheaven.pl/wp-content/uploads/2019/09/maiami-min.png", isActive = true },
            new Pizza { Id = 12, Name = "Woda", Category = "Napoje", Size = 40, Ingridients = "Woda", Price = 34.99m, Image = "https://sliceofheaven.pl/wp-content/uploads/2019/09/maiami-min.png", isActive = true },
            new Pizza { Id = 13, Name = "Sok", Category = "Napoje", Size = 40, Ingridients = "Sok", Price = 34.99m, Image = "https://sliceofheaven.pl/wp-content/uploads/2019/09/maiami-min.png", isActive = true },
            new Pizza { Id = 14, Name = "Cola", Category = "Napoje", Size = 40, Ingridients = "", Price = 34.99m, Image = "https://sliceofheaven.pl/wp-content/uploads/2019/09/maiami-min.png", isActive = true },
            new Pizza { Id = 15, Name = "Sos1", Category = "Sosy", Size = 40, Ingridients = "Cola", Price = 3.99m, Image = "", isActive = true },
            new Pizza { Id = 16, Name = "Sos2", Category = "Sosy", Size = 40, Ingridients = "", Price = 3.99m, Image = "", isActive = true },
            new Pizza { Id = 17, Name = "Sos3", Category = "Sosy", Size = 40, Ingridients = "", Price = 4.99m, Image = "", isActive = true },
            new Pizza { Id = 18, Name = "Sos4", Category = "Sosy", Size = 40, Ingridients = "", Price = 5.99m, Image = "", isActive = true },
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
                TotalCount = 18
            };
        }
    }
}
