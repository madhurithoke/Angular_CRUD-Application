# Angular CRUD Application

This is a simple Angular CRUD application with modular architecture. It demonstrates how to manage Students and Courses with Create, Read, and Delete functionalities using Angular and a mock JSON server.

## Modules & Structure

The application contains 5 main modules:

1. **Home**
2. **Header**
3. **Student**
   - Add Student (`app.addstudent.component`)
   - View Students (`app.viewstudent.component`)
   - Delete Student (`app.deletestudent.component`)
4. **Course**
   - Add Course (`app.addcourse.component`)
   - View Courses (`app.viewcourse.component`)
   - Delete Course (`app.deletecourse.component`)
5. **PageNotFound**
   - For handling unknown routes


## Features

✅ Modular structure using Angular CLI  
✅ Component-based architecture  
✅ CRUD operations (Create, Read, Delete)  
✅ Clean navigation with Angular Router  
✅ PageNotFound route for undefined paths  
✅ Reusable Header and Home layout  
✅ JSON Server integration as mock REST API  
✅ RESTful HTTP calls using Angular HttpClient  
✅ Form handling for student and course data  
✅ Simple and readable UI  
✅ Easy to scale and maintain  


##  Tech Stack

- **Frontend:** Angular 17
- **Mock Backend:** - **Node.js** (required for Angular CLI and JSON Server (`db.json`))
- **Language:** TypeScript, HTML, CSS
- **HTTP Client:** Angular `HttpClientModule`
- **Package Manager:** npm


## This will start the JSON Server at:
- http://localhost:3000

## This app uses db.json as a mock backend. Start it using:
- npm json-server --watch db.json

## Run Angular Application
- ng serve
- Visit: http://localhost:4200

## How Routing Works
- All routes are defined in app-routing.module.ts.
- Each module (Student, Course, Home, etc.) has its own components that are mapped to specific routes.
- A wildcard route ** redirects to the PageNotFoundComponent for unmatched URLs.

## Router Outlet
**In app.component.html:**
<app-header></app-header>
<router-outlet></router-outlet>

## Angular CLI Commands Used
**Generate a Module with Routing:**
- ng generate module student --routing
- ng generate module course --routing
- ng generate module home
- ng generate module header
- ng generate module page-not-found

## Generate Components:
**Student module components**
- ng generate component student/add-student
- ng generate component student/view-student
- ng generate component student/delete-student

**Course module components**
- ng generate component course/add-course
- ng generate component course/view-course
- ng generate component course/delete-course

**Other**
- ng generate component home
- ng generate component header
- ng generate component page-not-found

