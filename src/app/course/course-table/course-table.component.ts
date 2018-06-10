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
  courses:Icourse[];
  constructor(private CourseServiceService:CourseServiceService) { }

  ngOnInit() {
    this.courses=this.CourseServiceService.getAll();
    
  }
  delete(id:number){
    console.log(this.course);
    debugger
    this.CourseServiceService.delete(this.course.id);
  }

}
