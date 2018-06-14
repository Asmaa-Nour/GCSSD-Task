namespace GCSSD.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class Gcssd : DbContext
    {
        public Gcssd()
            : base("name=Gcssd")
        {
        }

        public virtual DbSet<course> course { get; set; }
        public virtual DbSet<instructor> instructor { get; set; }
        public virtual DbSet<instructor_course> instructor_course { get; set; }
        public virtual DbSet<student> student { get; set; }
        public virtual DbSet<student_course> student_course { get; set; }
        public virtual DbSet<student_instructor> student_instructor { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<course>()
                .HasMany(e => e.instructor_course)
                .WithRequired(e => e.course)
                .HasForeignKey(e => e.course_id)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<course>()
                .HasMany(e => e.student_course)
                .WithRequired(e => e.course)
                .HasForeignKey(e => e.course_id)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<instructor>()
                .HasMany(e => e.instructor_course)
                .WithRequired(e => e.instructor)
                .HasForeignKey(e => e.instructor_id)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<instructor>()
                .HasMany(e => e.student_instructor)
                .WithRequired(e => e.instructor)
                .HasForeignKey(e => e.instructor_id)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<student>()
                .HasMany(e => e.student_course)
                .WithRequired(e => e.student)
                .HasForeignKey(e => e.student_id)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<student>()
                .HasMany(e => e.student_instructor)
                .WithRequired(e => e.student)
                .HasForeignKey(e => e.student_id)
                .WillCascadeOnDelete(false);
        }
    }
}
