import { Component, OnInit } from '@angular/core';
import { Iinstructor } from '../../shared/interfaces/Iinstructor';
import { InstructorServiceService } from '../../shared/services/instructor-service.service';

@Component({
  selector: 'app-instructors-table',
  templateUrl: './instructors-table.component.html',
  styleUrls: ['./instructors-table.component.css']
})
export class InstructorsTableComponent implements OnInit {
 instructors:Iinstructor[];
 instructor:Iinstructor;
  constructor(private InstructorServiceService:InstructorServiceService) { }

  ngOnInit() {
    this.instructors=this.InstructorServiceService.getAll();
  }
  delete(){
    this.InstructorServiceService.delete(this.instructor.id);
  }

}
