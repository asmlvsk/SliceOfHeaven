using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SliceOfHeaven.Models
{
    public class Pizza
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Size { get; set; }
        public string Category { get; set; }
        public string Ingridients { get; set; }
        public decimal Price { get; set; }
        public string Image { get; set; }
        public bool isActive { get; set; }
    }
}
