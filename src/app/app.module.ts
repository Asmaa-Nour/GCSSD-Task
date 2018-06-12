import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes,ActivatedRoute} from '@angular/router';
import{Observable} from 'rxjs/Rx'

import { AppComponent } from './app.component';
import { InstructorComponent } from './instructor/instructor.component';
import { InstructorAddComponent } from './instructor/instructor-add/instructor-add.component';
import { InstructorSmallItemComponent } from './instructor/instructor-small-item/instructor-small-item.component';
import { InstructorListingComponent } from './instructor/instructor-listing/instructor-listing.component';
import { InstructorsTableComponent } from './instructor/instructors-table/instructors-table.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap';
import { OneSmallRowComponent } from './instructor/one-small-row/one-small-row.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InstructorEditComponent } from './instructor/instructor-edit/instructor-edit.component';
import { CourseListingComponent } from './course/course-listing/course-listing.component';
import { CourseSmallItemComponent } from './course/course-small-item/course-small-item.component';
import { CourseComponent } from './course/course.component';
import { CourseAddComponent } from './course/course-add/course-add.component';
import { CourseTableComponent } from './course/course-table/course-table.component';
import { CourseEditComponent } from './course/course-edit/course-edit.component';
import { StudentSmallItemComponent } from './student/student-small-item/student-small-item.component';
import { StudentListingComponent } from './student/student-listing/student-listing.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentTableComponent } from './student/student-table/student-table.component';
import { StudentComponent } from './student/student.component';
import { StudentMenuComponentComponent } from './student/student-menu-component/student-menu-component.component';
import { CourseMenuItemComponent } from './course/course-menu-item/course-menu-item.component';
import { InstructorMenuItemComponent } from './instructor/instructor-menu-item/instructor-menu-item.component';
import { FooterComponentComponent } from './shared/footer-component/footer-component.component';
import { HeaderComponentComponent } from './shared/header-component/header-component.component';

const routes: Routes = [
  {path :'', component : InstructorComponent},
  {path:'instructor',children:[
    { path:'component', component: InstructorComponent},
    { path: 'add', component: InstructorAddComponent},
    { path: 'listing', component: InstructorListingComponent},
    { path: 'table', component: InstructorsTableComponent},
    { path:'edit/:id' , component: InstructorEditComponent}
  ]},
  {path:'course',children:[
    { path:'component', component: CourseComponent},
    { path: 'add', component: CourseAddComponent},
    { path: 'listing', component: CourseListingComponent},
    { path: 'table', component: CourseTableComponent},
    { path:'edit/:id' , component: CourseEditComponent}
  ]},
  {path:'student',children:[
    { path:'component', component: StudentComponent},
    { path: 'add', component: StudentAddComponent},
    { path: 'listing', component: StudentListingComponent},
    { path: 'table', component: StudentTableComponent},
    { path:'edit/:id' , component: StudentEditComponent}
  ]},
  

];
@NgModule({
  declarations: [
    AppComponent,

    //instructor module components
    InstructorAddComponent,
    InstructorComponent,
    InstructorSmallItemComponent,
    InstructorListingComponent,
    InstructorsTableComponent,
    OneSmallRowComponent,
    InstructorEditComponent,

    //course module components
    CourseListingComponent,
    CourseSmallItemComponent,
    CourseComponent,
    CourseAddComponent,
    CourseTableComponent,
    CourseEditComponent,

    //student module components
    StudentSmallItemComponent,
    StudentListingComponent,
    StudentEditComponent,
    StudentAddComponent,
    StudentTableComponent,
    StudentComponent,

    //menus
    StudentMenuComponentComponent,
    CourseMenuItemComponent,
    InstructorMenuItemComponent,
    
    // shared components
    FooterComponentComponent,
    HeaderComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    [TooltipModule.forRoot()],
    [ModalModule.forRoot()],
    FormsModule,
    ReactiveFormsModule,
    [ReactiveFormsModule]
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
