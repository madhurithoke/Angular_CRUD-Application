import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { AddstudentComponent } from './student/addstudent/addstudent.component';
import { ViewstudentComponent } from './student/viewstudent/viewstudent.component';
import { HeaderComponent } from './header/header.component';
import { EditstudentComponent } from './student/editstudent/editstudent.component';
import { CoursesComponent } from './courses/courses.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddcourseComponent } from './courses/addcourse/addcourse.component';
import { ViewcourseComponent } from './courses/viewcourse/viewcourse.component';
import { EditcourseComponent } from './courses/editcourse/editcourse.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    AddstudentComponent,
    ViewstudentComponent,
    HeaderComponent,
    EditstudentComponent,
    CoursesComponent,
    PagenotfoundComponent,
    AddcourseComponent,
    ViewcourseComponent,
    EditcourseComponent,
    HomeComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
