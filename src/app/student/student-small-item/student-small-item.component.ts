import { Component, OnInit, Input } from '@angular/core';
import { Istudent } from '../../shared/interfaces/Istudent';
import { StudentServiceService } from '../../shared/services/student-service.service';

@Component({
  selector: 'app-student-small-item',
  templateUrl: './student-small-item.component.html',
  styleUrls: ['./student-small-item.component.css']
})
export class StudentSmallItemComponent implements OnInit {
  @Input() student:Istudent;
  id:number;
  constructor(private StudentServiceService:StudentServiceService) { }

  ngOnInit() {
  
  }
  delete(){
    this.StudentServiceService.delete(this.student.id);
  }
  

}
