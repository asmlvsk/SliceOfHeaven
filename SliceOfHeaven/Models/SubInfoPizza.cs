﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SliceOfHeaven.Models
{
    public class SubInfoPizza<T>
    {
        public List<T> Items { get; set; }
        public int TotalCount { get; set; }
    }
}
