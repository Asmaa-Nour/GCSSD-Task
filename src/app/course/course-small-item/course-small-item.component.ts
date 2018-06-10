import { Component, OnInit, Input } from '@angular/core';
import { Icourse } from '../../shared/interfaces/Icourse';
import { CourseServiceService } from '../../shared/services/course-service.service';

@Component({
  selector: 'app-course-small-item',
  templateUrl: './course-small-item.component.html',
  styleUrls: ['./course-small-item.component.css']
})
export class CourseSmallItemComponent implements OnInit {
  @Input() course:Icourse;
  constructor(private CourseServiceService:CourseServiceService) { }

  ngOnInit() {
  }
  delete(){
    this.CourseServiceService.delete(this.course.id);
  }

}
