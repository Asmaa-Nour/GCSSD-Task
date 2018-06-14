import { Injectable } from '@angular/core';
import { Icourse } from '../interfaces/Icourse';
import { Http, HttpModule } from '@angular/http';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  
  courses:Icourse[];
  url = "http://localhost:53795/api/courses";
 
  getCourses() {
  this.http.get<Icourse[]>(this.url).subscribe(res => { this.courses = res });
    return this.http.get<Icourse[]>(this.url);
  }

  add(form): Observable<Icourse> {
    var course: Icourse;
    course = form.value;
    console.log(course);
    return this.http.post<Icourse>(this.url, course);
  }

  public getCourse(id) {
  return this.courses.find(course => course.id == id);
}

// delete(id: number): Observable<{}> {
//   return this.http.delete("http://localhost:2097/api/courses/" + id )
// }
  delete(id: number){    
    const url = `${this.url}/${id}`;
    this.http.delete(url).subscribe(
      (isSuccess)=>
      {
        if(isSuccess)
        { 
          //debugger;
          var i =this.courses.findIndex(a=> a.id === id);
          this.courses.splice(i,1);
        }
      },
      (error)=> {
        console.log('error happen');
      }
    );
  }
  edit(course): Observable<Icourse> {
    const url = `${this.url}/${course.id}`;
    console.log(url);
    return this.http.put<Icourse>(url, course);
  }

  constructor(private http: HttpClient) {
    this.getCourses();
  }

}
