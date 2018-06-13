import { Component, OnInit, Input } from '@angular/core';
import { Iinstructor } from '../../shared/interfaces/Iinstructor';
import { Router, ActivatedRoute } from '@angular/router';
import { InstructorServiceService } from '../../shared/services/instructor-service.service';
import { Icourse } from '../../shared/interfaces/Icourse';
import { Istudent } from '../../shared/interfaces/Istudent';

@Component({
  selector: 'app-instructor-details',
  templateUrl: './instructor-details.component.html',
  styleUrls: ['./instructor-details.component.css']
})
export class InstructorDetailsComponent implements OnInit {
 instructor:Iinstructor;
 getInstructor() {
  const id = +this.ActivatedRoute.snapshot.paramMap.get('id');
  this.instructor = this.InstructorServiceService.getInstructor(id);
  console.log(this.instructor);
}
  constructor(private InstructorServiceService: InstructorServiceService, private ActivatedRoute: ActivatedRoute,  private router: Router) { }

  ngOnInit() {
    this.getInstructor();
  }

}
