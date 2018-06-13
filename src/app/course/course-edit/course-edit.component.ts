import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {NgControl} from '@angular/forms';
import { CourseServiceService } from '../../shared/services/course-service.service';
import { Icourse } from '../../shared/interfaces/Icourse';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  course: Icourse;
  name: string;
  description: string;
  hours: number;
  getCourse() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.course = this.CourseServiceService.getCourse(id);
    console.log(this.course);
  }
  goBack() {
    this.location.back();
  }
  update(form) {
    //debugger;
    this.course = this.CourseServiceService.getCourse(this.course.id);
    console.log(this.course);
    var i = this.CourseServiceService.courses.indexOf(this.course);
    console.log(i);
    this.course = {
      id: this.course.id,
      name: form.value.name == undefined ? this.course.name : form.value.name,
      description: form.value.description == undefined ? this.course.description : form.value.description,
      hours: form.value.hours == undefined ? this.course.hours : form.value.hours,
    }
    this.CourseServiceService.courses[i] = this.course;
    console.log(this.CourseServiceService.courses);
    this.CourseServiceService.edit(this.course).subscribe();
    this.router.navigate(['course/component']);
  }

  constructor(private CourseServiceService: CourseServiceService,private route: ActivatedRoute,private location: Location,private router: Router) { }

  ngOnInit() {
    this.getCourse();
  }
  // c: Icourse;
  // myForm: FormGroup;
  // id:number;
  // constructor(private CourseServiceService: CourseServiceService,private route:Router,private activatedRoute:ActivatedRoute) { }

  // ngOnInit() {
  //   this.activatedRoute.params.subscribe((params)=>{this.id=params['id'];});
  //   this.c = this.CourseServiceService.getById(this.id);
  //   this.myForm=new FormGroup({
  //     name: new FormControl(),
  //     hours: new FormControl(),
  //     description: new FormControl()
  //   });
  // }
  // update(){
  //   this.c={
  //     id:this.id,
  //     name:this.myForm.get('name').value,
  //     description:this.myForm.get('description').value,
  //     hours:this.myForm.get('hours').value
  //   }
  //   this.CourseServiceService.update(this.c);
  //   this.route.navigate(['course/component']);
  // }
}
