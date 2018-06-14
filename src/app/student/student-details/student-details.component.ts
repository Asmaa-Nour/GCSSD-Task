import { Component, OnInit } from '@angular/core';
import { Istudent } from '../../shared/interfaces/Istudent';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../../shared/services/student-service.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student:Istudent;
  getStudent() {
   const id = +this.ActivatedRoute.snapshot.paramMap.get('id');
   this.student = this.StudentServiceService.getStudent(id);
   console.log(this.student);
 }
  constructor( private StudentServiceService:StudentServiceService,private ActivatedRoute: ActivatedRoute,  private router: Router) { }

  ngOnInit() {
    this.getStudent();
  }

}
