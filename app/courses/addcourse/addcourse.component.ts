import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CourseserviceService } from 'src/app/courseservice.service';
import { StudentserviceService } from 'src/app/studentservice.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
 
  constructor(private courseservice : CourseserviceService,private fb :FormBuilder){ }
  
  courseForm !: FormGroup;
  
  ngOnInit(){
      
    this.courseForm = this.fb.group({
      cid:[],
      cname:[],
      coursecode:[],
       fees:[]
    })
  }
  
  registerCourse()  {

   // console.log(this.studentForm.value);
     this.courseservice.postCourse(this.courseForm.value).subscribe();
     alert("Register Success....")
     this.courseForm.reset();
  }
  
}


 


