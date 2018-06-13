import { Component, OnInit } from '@angular/core';
import { Istudent } from '../../shared/interfaces/Istudent';
import { FormGroup ,FormControl} from '@angular/forms';
import {NgControl} from '@angular/forms';
import { StudentServiceService } from '../../shared/services/student-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Iinstructor } from '../../shared/interfaces/Iinstructor';
import { Icourse } from '../../shared/interfaces/Icourse';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  student: Istudent;
  name:string;
  phone:string;
  email:string;
  dateOfBirth:Date;
  department:string;
  courses:Icourse[];
  instructors:Iinstructor[];
  getStudent() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.student = this.StudentServiceService.getStudent(id);
    console.log(this.student);
  }
 
  update(form) {
    this.student = this.StudentServiceService.getStudent(this.student.id);
    //console.log(this.student);
    var i = this.StudentServiceService.students.indexOf(this.student);
    console.log(i);
    this.student = {
      id: this.student.id,
      name: form.value.name == undefined ? this.student.name : form.value.name,
      phone: form.value.phone == undefined ? this.student.phone : form.value.phone,
      email: form.value.email == undefined ? this.student.email : form.value.email,
      dateOfBirth: form.value.dateOfBirth == undefined ? this.student.dateOfBirth : form.value.dateOfBirth,
    }
    this.StudentServiceService.students[i] = this.student;
    console.log(this.StudentServiceService.students);
    this.StudentServiceService.edit(this.student).subscribe();
    this.router.navigate(['/student/component']);
  }

  constructor(private StudentServiceService: StudentServiceService,private route: ActivatedRoute,private location: Location,private router: Router) { }

  ngOnInit() {
    this.getStudent();
  }

}
