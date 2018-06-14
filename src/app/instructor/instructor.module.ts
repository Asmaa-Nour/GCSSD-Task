import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorComponent } from './instructor.component';
import { InstructorAddComponent } from './instructor-add/instructor-add.component';
import { InstructorSmallItemComponent } from './instructor-small-item/instructor-small-item.component';
import { InstructorListingComponent } from './instructor-listing/instructor-listing.component';
import { InstructorsTableComponent } from './instructors-table/instructors-table.component';
import { RouterModule, Routes ,ActivatedRoute} from '@angular/router';
import { OneSmallRowComponent } from './one-small-row/one-small-row.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InstructorEditComponent } from './instructor-edit/instructor-edit.component';
import { InstructorMenuItemComponent } from './instructor-menu-item/instructor-menu-item.component';
import { HttpClientModule } from '@angular/common/http';
import { InstructorDetailsComponent } from './instructor-details/instructor-details.component';
import { MatSelectModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule
  ],
  declarations: [InstructorComponent,
    InstructorAddComponent,
    InstructorSmallItemComponent,
    InstructorListingComponent,
    InstructorsTableComponent,
    OneSmallRowComponent,
    InstructorEditComponent,
    InstructorMenuItemComponent,
    InstructorDetailsComponent
]
})
export class InstructorModule { }
