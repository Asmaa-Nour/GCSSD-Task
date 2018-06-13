import { Injectable } from '@angular/core';
import { Iinstructor } from '../interfaces/Iinstructor';
import { Http, HttpModule } from '@angular/http';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstructorServiceService {

  instructors:Iinstructor[];
  url = "http://localhost:53795/api/instructors";
 
  getInstructors() {
  this.http.get<Iinstructor[]>(this.url).subscribe(res => { this.instructors = res });
    return this.http.get<Iinstructor[]>(this.url);
  }

  add(form): Observable<Iinstructor> {
    var instructor: Iinstructor;
    instructor = form.value;
    console.log(instructor);
    return this.http.post<Iinstructor>(this.url, instructor);
  }

  public getInstructor(id) {
    return this.instructors.find(instructor => instructor.id == id);
}

  delete(id: number): Observable<{}> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url)
  }
  edit(instructor): Observable<Iinstructor> {
    const url = `${this.url}/${instructor.id}`;
    console.log(url);
    return this.http.put<Iinstructor>(url, instructor);
  }

  constructor(private http: HttpClient) {
    this.getInstructors();
  }

}


//   private instructor:Iinstructor;
// instructors:Iinstructor[]=[
//   {
//     id:1,
//     name:'ahmed mohamed',
//     phone:1222233,
//     email:'a@gmail.com',
//     Department:'HR',
//     image:'../../../assets/i1.jpg',
//     Courses:['oop','network','database']
//   },
//   {
//     id:2,
//     name:'yassin ali',
//     phone:1222233,
//     image:'../../../assets/i2.jpg',
//     email:'a@gmail.com',
//     Department:'HR',
//     Courses:['oop','network','database']
//   },
//   {
//     id:3,
//     name:'osama nour',
//     phone:1222233,
//     image:'../../../assets/i3.jpg',
//     email:'as@gmail.com',
//     Department:'IT',
//     Courses:['oop','network','database']
//   },
//   {
//     id:4,
//     name:'mohamed salah',
//     image:'../../../assets/i4.jpg',
//     phone:588433,
//     email:'a@gmail.com',
//     Department:'HR',
//     Courses:['oop','network','database']
//   },
//   {
//     id:5,
//     name:'aya mohamed',
//     phone:999993,
//     email:'aya@gmail.com',
//     Department:'finance',
//     image:'../../../assets/i5.jpg',
//     Courses:['oop','network','database']
//   }
// ]


// constructor() { }
// getAll() {
//   return this.instructors;
// }
// getCourses(id: number) {
//   return this.instructors[id].Courses;
// }
// getById(id) {
//   for (let i = 0; i < this.instructors.length; i++) {
//     if (this.instructors[i].id == id) {
//       this.instructor= this.instructors[i];
//     }
//   }
//   return this.instructor;
// }
// delete(id:number){
//   for(let i=0;i<this.instructors.length;i++){
//     if(this.instructors[i].id==id){
//       this.instructors.splice(i,1);
//     }
//   }

// }

// add(d:Iinstructor){
//   this.instructors.push(d);
// }
// update(newInstructor:Iinstructor){
//   const oldInstructor=this.getById(newInstructor.id);
//   oldInstructor.name=newInstructor.name;
//   oldInstructor.Courses=newInstructor.Courses;
//   oldInstructor.email=newInstructor.email;
//   oldInstructor.phone=newInstructor.phone;
//   oldInstructor.Department=newInstructor.Department;
//   oldInstructor.image=newInstructor.image;
// }
//}
