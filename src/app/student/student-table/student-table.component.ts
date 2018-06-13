import { Component, OnInit } from '@angular/core';
import { Istudent } from '../../shared/interfaces/Istudent';
import { StudentServiceService } from '../../shared/services/student-service.service';


@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {
  students:any[]=[];
 student:Istudent;
  constructor(private StudentServiceService:StudentServiceService) { }
  getStudents() {
    this.StudentServiceService.getStudents().subscribe(res => {
      this.StudentServiceService.students = res;
      this.students=this.StudentServiceService.students;
    });
  }
  ngOnInit() {
 
    this.getStudents();
  }
  delete(){
    debugger
    this.StudentServiceService.delete(this.student.id);
  }

}
