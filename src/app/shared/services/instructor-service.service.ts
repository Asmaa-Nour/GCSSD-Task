import { Injectable } from '@angular/core';
import { Iinstructor } from '../interfaces/Iinstructor';

@Injectable({
  providedIn: 'root'
})
export class InstructorServiceService {
  private instructor:Iinstructor;
instructors:Iinstructor[]=[
  {
    id:1,
    name:'ahmed mohamed',
    phone:1222233,
    email:'a@gmail.com',
    Department:'HR',
    image:'../../../assets/i1.jpg',
    Courses:['oop','network','database']
  },
  {
    id:2,
    name:'yassin ali',
    phone:1222233,
    image:'../../../assets/i2.jpg',
    email:'a@gmail.com',
    Department:'HR',
    Courses:['oop','network','database']
  },
  {
    id:3,
    name:'osama nour',
    phone:1222233,
    image:'../../../assets/i3.jpg',
    email:'as@gmail.com',
    Department:'IT',
    Courses:['oop','network','database']
  },
  {
    id:4,
    name:'mohamed salah',
    image:'../../../assets/i4.jpg',
    phone:588433,
    email:'a@gmail.com',
    Department:'HR',
    Courses:['oop','network','database']
  },
  {
    id:5,
    name:'aya mohamed',
    phone:999993,
    email:'aya@gmail.com',
    Department:'finance',
    image:'../../../assets/i5.jpg',
    Courses:['oop','network','database']
  }
]


constructor() { }
getAll() {
  return this.instructors;
}
getCourses(id: number) {
  return this.instructors[id].Courses;
}
getById(id) {
  for (let i = 0; i < this.instructors.length; i++) {
    if (this.instructors[i].id == id) {
      this.instructor= this.instructors[i];
    }
  }
  return this.instructor;
}


delete(id:number){
  for(let i=0;i<this.instructors.length;i++){
    if(this.instructors[i].id==id){
      this.instructors.splice(i,1);
    }
  }

}

add(d:Iinstructor){
  this.instructors.push(d);
}
update(newInstructor:Iinstructor){
  const oldInstructor=this.getById(newInstructor.id);
  oldInstructor.name=newInstructor.name;
  oldInstructor.Courses=newInstructor.Courses;
  oldInstructor.email=newInstructor.email;
  oldInstructor.phone=newInstructor.phone;
  oldInstructor.Department=newInstructor.Department;
  oldInstructor.image=newInstructor.image;
}
}
