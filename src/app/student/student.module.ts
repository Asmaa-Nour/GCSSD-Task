import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { StudentSmallItemComponent } from './student-small-item/student-small-item.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentListingComponent } from './student-listing/student-listing.component';
import { RouterModule, Routes ,ActivatedRoute} from '@angular/router';
import { StudentTableComponent } from './student-table/student-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { StudentMenuComponentComponent } from './student-menu-component/student-menu-component.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [StudentComponent,
    StudentSmallItemComponent,
    StudentEditComponent,
    StudentAddComponent,
    StudentListingComponent,
    StudentTableComponent,
    MenuComponentComponent,
    StudentMenuComponentComponent
]
})
export class StudentModule { }
