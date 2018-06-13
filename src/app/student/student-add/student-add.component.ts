import { Component, OnInit } from '@angular/core';
import { Istudent } from '../../shared/interfaces/Istudent';
import { FormGroup,FormControl } from '@angular/forms';
import {NgControl} from '@angular/forms';
import { StudentServiceService } from '../../shared/services/student-service.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Iinstructor } from '../../shared/interfaces/Iinstructor';
import { Icourse } from '../../shared/interfaces/Icourse';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  students: Istudent[];
  student: Istudent;
  name:string;
  phone:string;
  email:string;
  dateOfBirth:Date;
  department:string;
  courses:Icourse[];
  instructors:Iinstructor[];
  Courses = new FormControl();
  Instructors=new FormControl();
  CourseList=['network','javascript','c++','data structure']
  instructorList=['Ahmed Sayed','Ali Ahmed','Osama Ali','Ali Sayed']
  add(form) {
    this.StudentServiceService.students.push(form.value);
    this.StudentServiceService.add(form).subscribe(student => this.StudentServiceService.students.push(student));
    this.router.navigate(['../student/component']);
  }

  goBack() {
    this.location.back();
  }

  constructor(private StudentServiceService: StudentServiceService,private location: Location,private router: Router) {

   }

  ngOnInit() {
  }


  // s:Istudent;
  // myForm: FormGroup;
  // constructor(private StudentServiceService:StudentServiceService,private router:Router) { }

  // ngOnInit() {
  //   this.myForm = new FormGroup({
  //     name: new FormControl(),
  //     phone: new FormControl(),
  //     email: new FormControl(),
  //     birthdate: new FormControl(),
  //     //image:new FormControl()
  //   });
  // }

  // add(form) {
  //   this.StudentServiceService.students.push(form.value);
  //   this.StudentServiceService.add(form).subscribe(student => this.StudentServiceService.students.push(student));
  //   this.router.navigate(['student/component']);
  // }
  // add() {
  //   this.s={
  //     id:7,
  //     name: this.myForm.get('name').value,
  //     phone:this.myForm.get('phone').value,
  //     email:this.myForm.get('email').value,
  //     dateOfBirth:this.myForm.get('birthdate').value,
    
  //   }
  //   this.StudentServiceService.add(this.s);    
  //   this.myForm.reset();
  //   console.log(this.i);
  //   this.route.navigate(['student/component']);
  // }

}
