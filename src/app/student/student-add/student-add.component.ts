import { Component, OnInit } from '@angular/core';
import { Istudent } from '../../shared/interfaces/Istudent';
import { FormGroup,FormControl } from '@angular/forms';
import {NgControl} from '@angular/forms';
import { StudentServiceService } from '../../shared/services/student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  s:Istudent;
  myForm: FormGroup;
  constructor(private StudentServiceService:StudentServiceService,private route:Router) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      birthdate: new FormControl(),
      //image:new FormControl()
    });
  }
  add() {
    this.s={
      id:7,
      name: this.myForm.get('name').value,
      phone:this.myForm.get('phone').value,
      email:this.myForm.get('email').value,
      dateOfBirth:this.myForm.get('birthdate').value,
    
    }
    this.StudentServiceService.add(this.s);    
    this.myForm.reset();
    //console.log(this.i);
    this.route.navigate(['student/component']);
  }

}
