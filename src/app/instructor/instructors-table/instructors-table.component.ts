import { Component, OnInit } from '@angular/core';
import { Iinstructor } from '../../shared/interfaces/Iinstructor';
import { InstructorServiceService } from '../../shared/services/instructor-service.service';

@Component({
  selector: 'app-instructors-table',
  templateUrl: './instructors-table.component.html',
  styleUrls: ['./instructors-table.component.css']
})
export class InstructorsTableComponent implements OnInit {
 //instructors:Iinstructor[];
 instructors:any[]=[];
 instructor:Iinstructor;
  constructor(private InstructorServiceService:InstructorServiceService) { }
  getInstructors() {
    this.InstructorServiceService.getInstructors().subscribe(res => {
      this.InstructorServiceService.instructors = res;
      this.instructors=this.InstructorServiceService.instructors;
    });
  }
  ngOnInit() {
    //this.instructors=this.InstructorServiceService.getInstructors();
    this.getInstructors();
    //console.log(this.getInstructors());
  }
  delete(id){
    this.InstructorServiceService.delete(id);
  }

}
