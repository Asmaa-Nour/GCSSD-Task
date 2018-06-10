import { Component, OnInit, Input } from '@angular/core';
import { Iinstructor } from '../../shared/interfaces/Iinstructor';
import { InstructorServiceService } from '../../shared/services/instructor-service.service';

@Component({
  selector: 'app-one-small-row',
  templateUrl: './one-small-row.component.html',
  styleUrls: ['./one-small-row.component.css']
})
export class OneSmallRowComponent implements OnInit {
@Input() instructor:Iinstructor;
  constructor(private InstructorServiceService:InstructorServiceService) { }

  ngOnInit() {
  }
  delete(){
    this.InstructorServiceService.delete(this.instructor.id);
  }

}
