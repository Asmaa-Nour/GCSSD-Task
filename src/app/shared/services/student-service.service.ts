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

  // delete(id: number): Observable<{}> {
  //   var i =this.students.findIndex(a=> a.id === id);
  //   this.students.splice(i,1);
  //   const url = `${this.url}/${id}`;
  //   return this.http.delete(url);
  // }
  delete(id: number){    
    const url = `${this.url}/${id}`;
    this.http.delete(url).subscribe(
      (isSuccess)=>
      {
        if(isSuccess)
        { 
          debugger
          var i =this.students.findIndex(a=> a.id === id);
          this.students.splice(i,1);
          this.http.delete(url);
        }
      },
      (error)=> {
        alert('you can not delete this student since it has a relation with courses and instructors');
      }
    );
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

