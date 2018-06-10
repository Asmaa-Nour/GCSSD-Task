import { Component, OnInit } from '@angular/core';
import { Icourse } from '../../shared/interfaces/Icourse';
import { CourseServiceService } from '../../shared/services/course-service.service';

@Component({
  selector: 'app-course-listing',
  templateUrl: './course-listing.component.html',
  styleUrls: ['./course-listing.component.css']
})
export class CourseListingComponent implements OnInit {
  courses:Icourse[];
  constructor(private CourseServiceService:CourseServiceService) { }

  ngOnInit() {
    this.courses=this.CourseServiceService.getAll();
  }

}
