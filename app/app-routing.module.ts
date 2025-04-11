import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { AddstudentComponent } from './student/addstudent/addstudent.component';
import { ViewstudentComponent } from './student/viewstudent/viewstudent.component';
import { EditstudentComponent } from './student/editstudent/editstudent.component';
import { CoursesComponent } from './courses/courses.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppComponent } from './app.component';
import { AddcourseComponent } from './courses/addcourse/addcourse.component';
import { ViewcourseComponent } from './courses/viewcourse/viewcourse.component';
import { EditcourseComponent } from './courses/editcourse/editcourse.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },  

  { path: 'home', component: HomeComponent },

 {path:'student',component:StudentComponent,
 children:[
  { path:'addstudent',component:AddstudentComponent},
  { path:'viewstudent',component:ViewstudentComponent},
  {path:'editstudent/:id',component:EditstudentComponent}
 ] },

 {path:'courses',component:CoursesComponent,
  children:[
   { path:'addcourse',component:AddcourseComponent},
   { path:'viewcourse',component:ViewcourseComponent},
   {path:'editcourse/:id',component:EditcourseComponent}
  ] },


 {path:'**', component:PagenotfoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
