import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursesComponent } from '../courses.component';
import { Router } from '@angular/router';
import { CourseserviceService } from 'src/app/courseservice.service';

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css']
})
export class EditcourseComponent implements OnInit {

  constructor(private courseservice: CourseserviceService,private fb:FormBuilder,private router:Router){}

  courseForm !: FormGroup;

  singalCourse: any;

  ngOnInit() {
    this.courseForm = this.fb.group({
      cid:[],
      cname:[],
      marks:[],
      fees:[],
   
    })

    this.getEditCourse();
      
  }
  updateCourse()
  {
    this.courseservice.putCourse(this.courseForm.value).subscribe();

    this.router.navigateByUrl("course/viewcourse");
  }


  getEditCourse()
  {

   let cid: any = localStorage.getItem("cid");
   this.courseservice.getCourseById(cid).subscribe((co:any)=>{
       this.singalCourse=co;
       this.courseForm.patchValue({
           cid: this.singalCourse.cid,
         cname: this.singalCourse.cname,
        marks: this.singalCourse.marks,
        fees: this.singalCourse.fees,
  
       })

   });
  }

}
