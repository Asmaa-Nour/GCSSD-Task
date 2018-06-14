using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using GCSSD.Models;
using GCSSD.Models.managers;
using GCSSD.Models.poco_classes;

namespace GCSSD.Controllers
{
    public class coursesController : ApiController
    {
        private Gcssd db = new Gcssd();
        CourseManager cm = new CourseManager();

        // GET: api/courses
        public List<PocoCourse> Getcourse()
        {
            var courses = cm.GetAllCourses();
            // return courses.Select(i => new PocoInstructor { id = i.id, name = i.name, phone = i.phone, image = i.image, courses = i.instructor_course.Where(d => d.instructor_id == i.id).Select(b => b.course.name).ToList(), students = i.student_instructor.Where(a => a.instructor_id == i.id).Select(f => f.student.name).ToList() }).ToList();
            return courses.Select(c=>new PocoCourse { id=c.id, name=c.name,description=c.description,code=c.code,hours=c.hours,instructors=c.instructor_course.Where(a=>a.course.id==c.id).Select(b=>b.instructor.name).ToList(), students=c.student_course.Where(e=>e.course.id==c.id).Select(d=>d.student.name).ToList()}).ToList();
        }

        // GET: api/courses/5
        [ResponseType(typeof(course))]
        public IHttpActionResult Getcourse(int id)
        {
            course course = db.course.Find(id);
            if (course == null)
            {
                return NotFound();
            }

            return Ok(course);
        }

        // PUT: api/courses/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putcourse(int id, course course)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != course.id)
            {
                return BadRequest();
            }

            db.Entry(course).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!courseExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/courses
        [ResponseType(typeof(course))]
        public IHttpActionResult Postcourse(course course)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.course.Add(course);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = course.id }, course);
        }

        // DELETE: api/courses/5
        [ResponseType(typeof(course))]
        public IHttpActionResult Deletecourse(int id)
        {
            course course = db.course.Find(id);
            if (course == null)
            {
                return NotFound();
            }

            db.course.Remove(course);
            db.SaveChanges();
            return Ok(course);
            
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool courseExists(int id)
        {
            return db.course.Count(e => e.id == id) > 0;
        }
    }
}