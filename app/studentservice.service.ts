import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  constructor(private http: HttpClient) { }


  getAllStudent(){
   return this.http.get("http://localhost:3000/students");
  }

  postStudent(s: any){
    return this.http.post("http://localhost:3000/students",s);
  }

  deleteStudent(id: number){
    return this.http.delete("http://localhost:3000/students/"+id);
  }

  getStudentById(id : number)
  {
   return this.http.get("http://localhost:3000/students/"+id);
  }
  putStudent(st: any){
    return this.http.put("http://localhost:3000/students/"+st.id,st)
  }
}
