import { Component, OnInit } from '@angular/core';
import { Istudent } from '../../shared/interfaces/Istudent';
import { FormGroup ,FormControl} from '@angular/forms';
import {NgControl} from '@angular/forms';
import { StudentServiceService } from '../../shared/services/student-service.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  s:Istudent;
  editForm: FormGroup;
  id:number;
  constructor(private StudentServiceService:StudentServiceService,private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params)=>{this.id=params['id'];});
    this.s = this.StudentServiceService.getById(this.id);

    this.editForm=new FormGroup({
      name: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      birthdate: new FormControl()
    });
  }

  update(){
    this.s={
      id:this.id,
      name:this.editForm.get('name').value,
      phone:this.editForm.get('phone').value,
      email:this.editForm.get('email').value,
      dateOfBirth:this.editForm.get('birthdate').value,
    
    }
    this.StudentServiceService.update(this.s);
    this.route.navigate(['student/component']);
  }

}
