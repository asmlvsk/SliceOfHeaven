using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SliceOfHeaven.Models
{
    public class SubInfoUsers<T>
    {
        public List<T> Data { get; set; }
        public List<T> Orders { get; set; }
        public int ResultCode { get; set; }

    }
}
