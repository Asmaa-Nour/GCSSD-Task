import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { CourseSmallItemComponent } from './course-small-item/course-small-item.component';
import { CourseListingComponent } from './course-listing/course-listing.component';
import { RouterModule, Routes ,ActivatedRoute} from '@angular/router';
import { CourseAddComponent } from './course-add/course-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseTableComponent } from './course-table/course-table.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseMenuItemComponent } from './course-menu-item/course-menu-item.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
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
