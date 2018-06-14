import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from '../../shared/services/course-service.service';
import { Router } from '@angular/router';
import { Icourse } from '../../shared/interfaces/Icourse';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {
  course:Icourse;
  courses: any[]=[];
  //courses:Icourse[];
  constructor(private CourseServiceService:CourseServiceService) { }
  getCourses() {
    this.CourseServiceService.getCourses().subscribe(res => {
      this.CourseServiceService.courses = res;
      this.courses=this.CourseServiceService.courses;
    });
  }
  ngOnInit() {
    //this.courses=this.CourseServiceService.getCourses();
    this.getCourses();
  }
  delete(id){
    let course= this.CourseServiceService.courses.find(a=>a.id ==id);
    var i =this.CourseServiceService.courses.indexOf(course);
    this.CourseServiceService.courses.splice(i,1);
    this.CourseServiceService.delete(id);
  }

}
