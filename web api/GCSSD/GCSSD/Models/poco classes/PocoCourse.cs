using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GCSSD.Models.poco_classes
{
    public class PocoCourse
    {
        public int id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public string code { get; set; }
        public int? hours { get; set; }
        public List<string> students { get; set; }
        public List<string> instructors { get; set; }


    }
}