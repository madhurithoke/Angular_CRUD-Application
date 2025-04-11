
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseserviceService {

  constructor(private http: HttpClient) { }


  getAllCourse(){
   return this.http.get("http://localhost:3000/course");
  }

  postCourse(c: any){
    return this.http.post("http://localhost:3000/course",c);
  }

  deleteCourse(id: number){
    return this.http.delete("http://localhost:3000/course/"+id);
  }

  getCourseById(id : number)
  {
   return this.http.get("http://localhost:3000/course/"+id);
  }
  putCourse(co: any){
    return this.http.put("http://localhost:3000/course/"+co.id,co)
  }
}
