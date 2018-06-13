import { Component, OnInit } from '@angular/core';
import { Iinstructor } from '../../shared/interfaces/Iinstructor';
import { InstructorServiceService } from '../../shared/services/instructor-service.service';

@Component({
  selector: 'app-instructor-listing',
  templateUrl: './instructor-listing.component.html',
  styleUrls: ['./instructor-listing.component.css']
})
export class InstructorListingComponent implements OnInit {
  instructors: any[]=[];
  instructor: Iinstructor;
 
  getInstructors() {
    this.InstructorServiceService.getInstructors().subscribe(res => {
      this.InstructorServiceService.instructors = res;
      this.instructors=this.InstructorServiceService.instructors;
    });
  }
  delete(id: number) {
    var instructor = this.InstructorServiceService.instructors.map(function (item) { return item.id; }).indexOf(id);
    this.InstructorServiceService.instructors.splice(instructor, 1);
    this.InstructorServiceService.delete(id).subscribe();
  }
  constructor(private InstructorServiceService: InstructorServiceService) { }
  ngOnInit() {
    this.getInstructors();
  }
  // instructors:Iinstructor[];

  // constructor(private InstructorServiceService:InstructorServiceService ) { }

  // ngOnInit() {
  //   this.instructors=this.InstructorServiceService.getAll();
  // }

}
