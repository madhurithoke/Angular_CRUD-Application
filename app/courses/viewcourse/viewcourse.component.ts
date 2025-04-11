import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseserviceService } from 'src/app/courseservice.service';


@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent implements OnInit {

  constructor(private courseservice: CourseserviceService,private router:Router){ }
  
  course: any;
  
  ngOnInit()
   {
       this.courseservice.getAllCourse().subscribe((c: any)=>{
        this.course=c;
        
       })
  }
  removeCourse(cid: number){

   
    alert("course deleted....."+cid);
    this.courseservice.deleteCourse(cid).subscribe();
    window.location.reload();
    
  }
  editCourse(cid : any)
  {
    localStorage.setItem("coureseid",cid);
      this.router.navigateByUrl("course/editcourse/"+cid);
  }

}