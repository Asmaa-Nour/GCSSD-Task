namespace GCSSD.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class instructor_course
    {
        public int instructor_id { get; set; }

        public int course_id { get; set; }

        public int id { get; set; }

        public virtual course course { get; set; }

        public virtual instructor instructor { get; set; }
    }
}
