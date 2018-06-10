import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {NgControl} from '@angular/forms';
import { Icourse } from '../../shared/interfaces/Icourse';
import { CourseServiceService } from '../../shared/services/course-service.service';


@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {
  myForm: FormGroup;
  c:Icourse;

  constructor(private CourseServiceService: CourseServiceService,private route:Router) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      hours: new FormControl(),
    });
  }

  add() {
    debugger
    this.c={
      id:6,
      name: this.myForm.get('name').value,
      description:this.myForm.get('description').value,
      hours:this.myForm.get('hours').value
    }
    this.CourseServiceService.add(this.c);    
    //this.myForm.reset();
    //console.log(this.i);
    this.route.navigate(['course/component']);
  }

}