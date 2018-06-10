import { Injectable } from '@angular/core';
import { Icourse } from '../interfaces/Icourse';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  course:Icourse;
courses:Icourse[]=[
  {
    id:1,
    code:"c1",
    name:"Network",
    description:"a digital telecommunications network which allows nodes to share resources",
    hours:5
  },
  {
    id:2,
    code:"c2",
    name:"Mongo",
    description:"MongoDB for GIANT Ideas - Build innovative modern applications",
    hours:5
  },
  {
    id:3,
    code:"c3",
    name:"Database",
    description:"A database is an organized collection of data. A relational database",
    hours:5
  },
  {
    id:4,
    code:"c4",
    name:"Java",
    description:"About Java. Go Java Java + Alice Java + Greenfoot",
    hours:7
  },
  {
    id:5,
    code:"c5",
    name:"C++",
    description:"It has imperative, object-oriented and generic programming features",
    hours:8
  }
]
constructor() { }
getAll() {
  return this.courses;
}

getById(id) {
  for (let i = 0; i < this.courses.length; i++) {
    if (this.courses[i].id == id) {
      this.course= this.courses[i];
    }
  }
  return this.course;
}


delete(id:number){
  for(let i=0;i<this.courses.length;i++){
    if(this.courses[i].id==id){
      this.courses.splice(i,1);
    }
  }

}

add(c:Icourse){
  this.courses.push(c);
}
update(newCourse:Icourse){
  const oldCourse=this.getById(newCourse.id);
  oldCourse.name=newCourse.name;
  oldCourse.code=newCourse.code;
  oldCourse.description=newCourse.description;
  oldCourse.hours=newCourse.hours;
}
}
