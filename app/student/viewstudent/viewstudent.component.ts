import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentserviceService } from 'src/app/studentservice.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  constructor(private studentservice : StudentserviceService,private router:Router){ }
  
  students: any;
  
  ngOnInit()
   {
       this.studentservice.getAllStudent().subscribe((s: any)=>{
        this.students=s;
        
       })
  }
  removeStudent(sid: number){

   
    alert("student deleted....."+sid);
    this.studentservice.deleteStudent(sid).subscribe();
    window.location.reload();
    
  }
  editStudent(id : any)
  {
    localStorage.setItem("stid",id);
      this.router.navigateByUrl("student/editstudent/"+id);
  }

}