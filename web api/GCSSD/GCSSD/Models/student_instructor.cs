namespace GCSSD.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class student_instructor
    {
        public int student_id { get; set; }

        public int instructor_id { get; set; }

        public int id { get; set; }

        public virtual instructor instructor { get; set; }

        public virtual student student { get; set; }
    }
}
