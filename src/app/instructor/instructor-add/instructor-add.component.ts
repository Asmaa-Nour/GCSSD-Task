import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { InstructorServiceService } from '../../shared/services/instructor-service.service';
import { Iinstructor } from '../../shared/interfaces/Iinstructor';
import {NgControl} from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Icourse } from '../../shared/interfaces/Icourse';

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
  add(form) {
    this.InstructorServiceService.instructors.push(form.value);
    this.InstructorServiceService.add(form).subscribe(instructor => this.InstructorServiceService.instructors.push(instructor));
    this.router.navigate(['../instructor.component.html']);
  }

  goBack() {
    this.location.back();
  }

  constructor(private InstructorServiceService: InstructorServiceService,private location: Location,private router: Router) {

   }

  ngOnInit() {
  }

  // i: Iinstructor;
  // myForm: FormGroup;
  // constructor(private InstructorServiceService: InstructorServiceService,private route:Router) { }

  // ngOnInit() {
  //   this.myForm = new FormGroup({
  //     name: new FormControl(),
  //     phone: new FormControl(),
  //     email: new FormControl(),
  //     courses: new FormControl(),
  //     department: new FormControl(),
  //     //image:new FormControl()
  //   });
  // }
  // add() {
  //   debugger
  //   this.i={
  //     id:6,
  //     name: this.myForm.get('name').value,
  //     phone:this.myForm.get('phone').value,
  //     email:this.myForm.get('email').value,
  //     Courses:this.myForm.get('courses').value,
  //     Department:this.myForm.get('department').value,
  //     image:'../../../assets/Unknown.jpg'
  //   }
  //   this.InstructorServiceService.add(this.i);    
  //   this.myForm.reset();
  //   //console.log(this.i);
  //   this.route.navigate(['instructor/component']);
  // }
}
