import { Component, OnInit } from '@angular/core';
import { Iinstructor } from '../../shared/interfaces/Iinstructor';
import { InstructorServiceService } from '../../shared/services/instructor-service.service';

@Component({
  selector: 'app-instructor-listing',
  templateUrl: './instructor-listing.component.html',
  styleUrls: ['./instructor-listing.component.css']
})
export class InstructorListingComponent implements OnInit {
  instructors:Iinstructor[];
  constructor(private InstructorServiceService:InstructorServiceService ) { }

  ngOnInit() {
    this.instructors=this.InstructorServiceService.getAll();
  }

}
