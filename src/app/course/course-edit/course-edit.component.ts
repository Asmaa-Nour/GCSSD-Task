import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {NgControl} from '@angular/forms';
import { CourseServiceService } from '../../shared/services/course-service.service';
import { Icourse } from '../../shared/interfaces/Icourse';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  c: Icourse;
  myForm: FormGroup;
  id:number;
  constructor(private CourseServiceService: CourseServiceService,private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params)=>{this.id=params['id'];});
    this.c = this.CourseServiceService.getById(this.id);
    this.myForm=new FormGroup({
      name: new FormControl(),
      hours: new FormControl(),
      description: new FormControl()
    });
  }
  update(){
    this.c={
      id:this.id,
      name:this.myForm.get('name').value,
      description:this.myForm.get('description').value,
      hours:this.myForm.get('hours').value
    }
    this.CourseServiceService.update(this.c);
    this.route.navigate(['course/component']);
  }
}
