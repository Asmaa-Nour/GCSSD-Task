import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { CourseSmallItemComponent } from './course-small-item/course-small-item.component';
import { CourseListingComponent } from './course-listing/course-listing.component';
import { RouterModule, Routes ,ActivatedRoute} from '@angular/router';
import { CourseAddComponent } from './course-add/course-add.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CourseTableComponent } from './course-table/course-table.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseMenuItemComponent } from './course-menu-item/course-menu-item.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [CourseComponent,
    CourseSmallItemComponent,
    CourseListingComponent,
    CourseAddComponent,
    CourseTableComponent,
    CourseEditComponent,
    CourseMenuItemComponent
]
})
export class CourseModule { }
