import { Injectable } from '@angular/core';
import { Istudent } from '../interfaces/Istudent';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  student:Istudent;
  students: Istudent[] = [
    {
     id:1,
     name:'mohamed taher',
     phone:1423,
     email:"as@sd.com",
     courses:['c#','c++','c']
    },
    {
      id:2,
      name:'taher mohamed',
      phone:14553,
      email:"as@sd.com",
      courses:['c#','network','java']
     },
     {
      id:3,
      name:'mohamed taher',
      phone:1423,
      email:"as@sd.com",
      courses:['c#','c++','c']
     },
     {
      id:4,
      name:'taher mohamed',
      phone:14553,
      email:"as@sd.com",
      courses:['c#','network','java']
     },
     {
      id:5,
      name:'mohamed taher',
      phone:1423,
      email:"as@sd.com",
      courses:['c#','c++','c']
     },
     {
      id:6,
      name:'taher mohamed',
      phone:14553,
      email:"as@sd.com",
      courses:['c#','network','java']
     }
  ]
  constructor() { }
  getAll() {
    return this.students;
  }
  
  getById(id) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id == id) {
        this.student= this.students[i];
      }
    }
    return this.student;
  }
  
  
  delete(id:number){
    for(let i=0;i<this.students.length;i++){
      if(this.students[i].id==id){
        this.students.splice(i,1);
      }
    }
  
  }
  
  add(s:Istudent){
    this.students.push(s);
  }
  update(newStudent:Istudent){
    const oldStudent=this.getById(newStudent.id);
    oldStudent.name=newStudent.name;
    oldStudent.courses=newStudent.courses;
    oldStudent.email=newStudent.email;
    oldStudent.phone=newStudent.phone;
    // oldStudent.image=newStudent.image;
  }
}
