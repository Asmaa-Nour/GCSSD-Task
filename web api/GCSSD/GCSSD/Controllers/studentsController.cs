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
using GCSSD.Models.poco_classes;
using GCSSD.Models.managers;

namespace GCSSD.Controllers
{
    public class studentsController : ApiController
    {
        private Gcssd db = new Gcssd();
        StudentManager sm = new StudentManager();
        // GET: api/students
        public List<PocoStudent> Getstudent()
        {
            var students = sm.GetAllStudents();
            return students.Select(s => new PocoStudent { id = s.id, name = s.name, image = s.image, phone = s.phone, courses = s.student_course.Where(d=>d.student_id ==s.id).Select(a=>a.course.name).ToList(),instructors=s.student_instructor.Where(r=>r.student_id==s.id).Select(b=>b.instructor.name).ToList() }).ToList();
        }

        // GET: api/students/5
        [ResponseType(typeof(student))]
        public IHttpActionResult Getstudent(int id)
        {
            student student = db.student.Find(id);
            if (student == null)
            {
                return NotFound();
            }

            return Ok(student);
        }

        // PUT: api/students/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putstudent(int id, student student)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != student.id)
            {
                return BadRequest();
            }

            db.Entry(student).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!studentExists(id))
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

        // POST: api/students
        [ResponseType(typeof(student))]
        public IHttpActionResult Poststudent(student student)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.student.Add(student);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = student.id }, student);
        }

        // DELETE: api/students/5
        [ResponseType(typeof(student))]
        public IHttpActionResult Deletestudent(int id)
        {
            student student = db.student.Find(id);
            if (student == null)
            {
                return NotFound();
            }
            
                db.student.Remove(student);
                db.SaveChanges();
            return Ok(student);


        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool studentExists(int id)
        {
            return db.student.Count(e => e.id == id) > 0;
        }
    }
}