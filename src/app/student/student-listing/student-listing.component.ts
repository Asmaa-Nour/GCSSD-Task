import { Component, OnInit } from '@angular/core';
import { Istudent } from '../../shared/interfaces/Istudent';
import { StudentServiceService } from '../../shared/services/student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-listing',
  templateUrl: './student-listing.component.html',
  styleUrls: ['./student-listing.component.css']
})
export class StudentListingComponent implements OnInit {
  students: any[]=[];
  student: Istudent;
  getstudents() {
    this.StudentServiceService.getStudents().subscribe(res => {
      this.StudentServiceService.students = res;
      this.students=this.StudentServiceService.students;
    });
  }
  delete(id: number) {
    var student = this.StudentServiceService.students.map(function (item) { return item.id; }).indexOf(id);
    this.StudentServiceService.students.splice(student, 1);
    this.StudentServiceService.delete(id).subscribe();
  }
  constructor(private StudentServiceService: StudentServiceService) { }
  ngOnInit() {
   // debugger;
    this.getstudents();
  }
  //students:Istudent[];
  // public students: any = [];
  // constructor(public StudentServiceService:StudentServiceService , public Router: Router) { }
  // ngOnInit() {
  //   // this.students=this.StudentServiceService.getAll();
  //   this.StudentServiceService.getAll().subscribe(response=> {
  //     response = response.json();
  //     this.students = response;
  //   })
  // }

}
