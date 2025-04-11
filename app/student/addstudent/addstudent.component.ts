import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentserviceService } from 'src/app/studentservice.service';


@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private studentservice : StudentserviceService,private fb :FormBuilder){ }
  
  studentForm !: FormGroup;
  
  ngOnInit(){
      
    this.studentForm = this.fb.group({
      id:[],
      name:[],
      contact:[],
      marks:[],
      username:[],
      password:[]
    })
  }
  
  registerStudent()  {

   // console.log(this.studentForm.value);
     this.studentservice.postStudent(this.studentForm.value).subscribe();
     alert("Register Success....")
     this.studentForm.reset();
  }
  
}


