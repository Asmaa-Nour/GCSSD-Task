import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { InstructorServiceService } from '../../shared/services/instructor-service.service';
import { Iinstructor } from '../../shared/interfaces/Iinstructor';
import {NgControl} from '@angular/forms';
import { Router } from '@angular/router';
import { Icourse } from '../../shared/interfaces/Icourse';
import { Istudent } from '../../shared/interfaces/Istudent';

@Component({
  selector: 'app-instructor-add',
  templateUrl: './instructor-add.component.html',
  styleUrls: ['./instructor-add.component.css']
})
export class InstructorAddComponent implements OnInit {
  instructors: Iinstructor[];
  instructor: Iinstructor;
  name:string;
  phone:string;
  email:string;
  department:string;
courses:Icourse[];
students:Istudent[];
Courses = new FormControl();
Students=new FormControl();
CourseList=['network','javascript','c++','data structure']
StudentList=['Ahmed Sayed','Ali Ahmed','Osama Ali','Ali Sayed']

  add(form) {
    this.InstructorServiceService.instructors.push(form.value);
    this.InstructorServiceService.add(form).subscribe(instructor => this.InstructorServiceService.instructors.push(instructor));
    this.router.navigate(['/instructor/component']);
  }
  constructor(private InstructorServiceService: InstructorServiceService,private router: Router) {

   }

  ngOnInit() {
  }
}