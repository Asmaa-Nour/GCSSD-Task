import { Component, OnInit } from '@angular/core';
import { Icourse } from '../../shared/interfaces/Icourse';
import { CourseServiceService } from '../../shared/services/course-service.service';

@Component({
  selector: 'app-course-listing',
  templateUrl: './course-listing.component.html',
  styleUrls: ['./course-listing.component.css']
})
export class CourseListingComponent implements OnInit {
  courses: any[]=[];
  course: Icourse;
  getCourses() {
    this.CourseServiceService.getCourses().subscribe(res => {
      this.CourseServiceService.courses = res;
      this.courses=this.CourseServiceService.courses;
    });
  }
  // delete(id: number) {
  //   var course = this.CourseServiceService.courses.map(function (item) { return item.id; }).indexOf(id);
  //   this.CourseServiceService.courses.splice(course, 1);
  //   this.CourseServiceService.delete(id);
  // }
  constructor(private CourseServiceService: CourseServiceService) { }
  ngOnInit() {
   // debugger;
    this.getCourses();
  }
  // courses:Icourse[];
  // constructor(private CourseServiceService:CourseServiceService) { }

  // ngOnInit() {
  //   this.courses=this.CourseServiceService.getAll();
  // }

}
