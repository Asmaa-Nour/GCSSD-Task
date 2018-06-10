import { Component, OnInit } from '@angular/core';
import { Istudent } from '../../shared/interfaces/Istudent';
import { StudentServiceService } from '../../shared/services/student-service.service';

@Component({
  selector: 'app-student-listing',
  templateUrl: './student-listing.component.html',
  styleUrls: ['./student-listing.component.css']
})
export class StudentListingComponent implements OnInit {
  students:Istudent[];
  constructor(private StudentServiceService:StudentServiceService ) { }

  ngOnInit() {
    this.students=this.StudentServiceService.getAll();
  }

}
