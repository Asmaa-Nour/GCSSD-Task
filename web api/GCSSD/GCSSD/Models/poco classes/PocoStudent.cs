using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GCSSD.Models.poco_classes
{
    public class PocoStudent
    {
        public int id { get; set; }
        public string name { get; set; }
        public string phone { get; set; }
        public string email { get; set; }
        public string image { get; set; }
        public DateTime dateOfBirth { get; set; }
        public List<string> instructors { get; set; }
        public List<string> courses { get; set; }
    }
}