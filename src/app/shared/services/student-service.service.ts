import { Injectable } from '@angular/core';
import { Istudent } from '../interfaces/Istudent';
import { Http, HttpModule } from '@angular/http';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { error } from 'util';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  students:Istudent[];
  url = "http://localhost:53795/api/students";
 
  getStudents() {
  this.http.get<Istudent[]>(this.url).subscribe(res => { this.students = res });
    return this.http.get<Istudent[]>(this.url);
  }

  add(form): Observable<Istudent> {
    var student: Istudent;
    student = form.value;
    console.log(student);
    return this.http.post<Istudent>(this.url, student);
  }
  public getStudent(id) {
    return this.students.find(student => student.id == id);
}

  delete(id: number): Observable<{}> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url);
  }
  edit(student): Observable<Istudent> {
    const url = `${this.url}/${student.id}`;
    //console.log(url);
    return this.http.put<Istudent>(url, student);
  }

  constructor(private http: HttpClient) {
    this.getStudents();
  }

}



  // students: Istudent[] = [
  //   {
  //    id:1,
  //    name:'mohamed taher',
  //    phone:1423,
  //    email:"as@sd.com",
  //    courses:['c#','c++','c']
  //   },
  //   {
  //     id:2,
  //     name:'taher mohamed',
  //     phone:14553,
  //     email:"as@sd.com",
  //     courses:['c#','network','java']
  //    },
  //    {
  //     id:3,
  //     name:'mohamed taher',
  //     phone:1423,
  //     email:"as@sd.com",
  //     courses:['c#','c++','c']
  //    },
  //    {
  //     id:4,
  //     name:'taher mohamed',
  //     phone:14553,
  //     email:"as@sd.com",
  //     courses:['c#','network','java']
  //    },
  //    {
  //     id:5,
  //     name:'mohamed taher',
  //     phone:1423,
  //     email:"as@sd.com",
  //     courses:['c#','c++','c']
  //    },
  //    {
  //     id:6,
  //     name:'taher mohamed',
  //     phone:14553,
  //     email:"as@sd.com",
  //     courses:['c#','network','java']
  //    }
  // ]
  // constructor() { }
  // getAll() {
  //   return this.students;
  // }

  // getById(id) {
  //   for (let i = 0; i < this.students.length; i++) {
  //     if (this.students[i].id == id) {
  //       this.student= this.students[i];
  //     }
  //   }
  //   return this.student;
  // }


  // delete(id:number){
  //   for(let i=0;i<this.students.length;i++){
  //     if(this.students[i].id==id){
  //       this.students.splice(i,1);
  //     }
  //   }

  // }

  // add(s:Istudent){
  //   this.students.push(s);
  // }
  // update(newStudent:Istudent){
  //   const oldStudent=this.getById(newStudent.id);
  //   oldStudent.name=newStudent.name;
  //   oldStudent.courses=newStudent.courses;
  //   oldStudent.email=newStudent.email;
  //   oldStudent.phone=newStudent.phone;
    // oldStudent.image=newStudent.image;
  //}

