using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GCSSD.Models.managers
{
    public class CourseManager
    {
        Gcssd ctx;
        public CourseManager()
        {
            ctx = new Gcssd();
        }
        public List<course> GetAllCourses()
        {
            return ctx.course.ToList();
        }
        public int Remove(int id)
        {
            course c = ctx.course.FirstOrDefault(co => co.id == id);
            ctx.course.Remove(c);
            return ctx.SaveChanges();
        }
    }
}