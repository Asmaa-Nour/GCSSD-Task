import { Component, OnInit } from '@angular/core';
import { Istudent } from '../../shared/interfaces/Istudent';
import { StudentServiceService } from '../../shared/services/student-service.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {
  students:Istudent[];
  student:Istudent;
  constructor(private StudentServiceService:StudentServiceService) { }

  ngOnInit() {
    this.students=this.StudentServiceService.getAll();
  }
  delete(id:number){
    this.StudentServiceService.delete(this.student.id);
  }

}
