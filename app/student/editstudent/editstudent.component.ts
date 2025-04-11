import { Component, OnInit } from '@angular/core';
import { StudentComponent } from '../student.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentserviceService } from 'src/app/studentservice.service';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {

  constructor(private studentservice:StudentserviceService,private fb:FormBuilder,private router:Router){}

  studentForm !: FormGroup;

  singalStudent : any;

  ngOnInit() {
    this.studentForm = this.fb.group({
      id:[],
      name:[],
      contact:[],
      marks:[],
      username:[],
      password:[]
    })

    this.getEditStudent();
      
  }
  updateStudent()
  {
    this.studentservice.putStudent(this.studentForm.value).subscribe();

    this.router.navigateByUrl("student/viewstudent");
  }


  getEditStudent()
  {

   let sid: any = localStorage.getItem("stid");
   this.studentservice.getStudentById(sid).subscribe((st:any)=>{
       this.singalStudent=st;
       this.studentForm.patchValue({
           id: this.singalStudent.id,
         name: this.singalStudent.name,
      contact: this.singalStudent.contact,
        marks: this.singalStudent.marks,
     username: this.singalStudent.username,
     password: this.singalStudent.password,
       })

   });
  }

}
