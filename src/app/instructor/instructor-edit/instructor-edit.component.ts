import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Iinstructor } from '../../shared/interfaces/Iinstructor';
import { InstructorServiceService } from '../../shared/services/instructor-service.service';
import { Location } from '@angular/common';
import { Icourse } from '../../shared/interfaces/Icourse';
import { Istudent } from '../../shared/interfaces/Istudent';

@Component({
  selector: 'app-instructor-edit',
  templateUrl: './instructor-edit.component.html',
  styleUrls: ['./instructor-edit.component.css']
})
export class InstructorEditComponent implements OnInit {
  instructor: Iinstructor;
  name: string;
  phone: string;
  email: string;
  department: string;
  courses: Icourse[];
  students: Istudent[];
  getInstructor() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.instructor = this.InstructorServiceService.getInstructor(id);
    console.log(this.instructor);
  }
  update(form) {
    this.instructor = this.InstructorServiceService.getInstructor(this.instructor.id);
    console.log(this.instructor);
    var i = this.InstructorServiceService.instructors.indexOf(this.instructor);
    console.log(i);
    this.instructor = {
      id: this.instructor.id,
      name: form.value.name == undefined ? this.instructor.name : form.value.name,
      phone: form.value.phone == undefined ? this.instructor.phone : form.value.phone,
      email: form.value.email == undefined ? this.instructor.email : form.value.email,
      Department: form.value.department == undefined ? this.instructor.Department : form.value.department,
      Courses: form.value.courses == undefined ? this.instructor.Courses : form.value.courses,
    }
    this.InstructorServiceService.instructors[i] = this.instructor;
    console.log(this.InstructorServiceService.instructors);
    this.InstructorServiceService.edit(this.instructor).subscribe();
    this.router.navigate(['../student.component.html']);
  }

  constructor(private InstructorServiceService: InstructorServiceService, private route: ActivatedRoute, private location: Location, private router: Router) { }

  ngOnInit() {
    this.getInstructor();
  }
}
