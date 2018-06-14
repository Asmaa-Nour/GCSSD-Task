using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GCSSD.Models.managers
{
    public class StudentManager
    {
        Gcssd ctx;
        public StudentManager()
        {
            ctx = new Gcssd();
        }
        public List<student> GetAllStudents()
        {
            return ctx.student.ToList();
        }
        public int Remove(int id)
        {
            student s = ctx.student.FirstOrDefault(st => st.id == id);
            ctx.student.Remove(s);
            return ctx.SaveChanges();
        }
       

    }
}