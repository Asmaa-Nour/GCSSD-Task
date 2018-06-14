import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes,ActivatedRoute} from '@angular/router';
import {Http, HttpModule} from '@angular/http';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpClientModule} from '@angular/common/http';
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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { InstructorDetailsComponent } from './instructor/instructor-details/instructor-details.component';
import { MatSelectModule } from '@angular/material/select';
import { StudentDetailsComponent } from './student/student-details/student-details.component';

const routes: Routes = [
  {path :'', component : InstructorComponent},
  {path:'instructor',children:[
    { path:'component', component: InstructorComponent},
    { path: 'add', component: InstructorAddComponent},
    { path: 'listing', component: InstructorListingComponent},
    { path: 'table', component: InstructorsTableComponent},
    { path:'edit/:id' , component: InstructorEditComponent},
    { path:'details/:id' , component: InstructorDetailsComponent}
    
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
    { path:'edit/:id' , component: StudentEditComponent},
    { path:'details/:id' , component: StudentDetailsComponent}
    
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
    InstructorDetailsComponent,

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
    StudentDetailsComponent,

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
    HttpModule,
    RouterModule.forRoot(routes),
    [TooltipModule.forRoot()],
    [ModalModule.forRoot()],
    FormsModule,
    ReactiveFormsModule,
    [ReactiveFormsModule],
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
