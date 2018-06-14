import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Iinstructor } from '../../shared/interfaces/Iinstructor';
import { InstructorServiceService } from '../../shared/services/instructor-service.service';


@Component({
  selector: 'app-instructor-small-item',
  templateUrl: './instructor-small-item.component.html',
  styleUrls: ['./instructor-small-item.component.css']
})
export class InstructorSmallItemComponent implements OnInit {
  @Input() instructor:Iinstructor;
  constructor(private InstructorServiceService:InstructorServiceService) { }
  ngOnInit() {
  }
  delete(id){
    this.InstructorServiceService.delete(id);
  }
}
