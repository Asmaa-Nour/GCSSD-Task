using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GCSSD.Models.managers
{
    public class InstructorManager
    {
        Gcssd ctx;
        public InstructorManager()
        {
            ctx = new Gcssd();
        }
        public List<instructor> GetAllInstructors()
        {
            return ctx.instructor.ToList();
        }
        public int Remove(int id)
        {
            instructor i = ctx.instructor.FirstOrDefault(ins => ins.id == id);
            ctx.instructor.Remove(i);
            return ctx.SaveChanges();
        }
    }
}