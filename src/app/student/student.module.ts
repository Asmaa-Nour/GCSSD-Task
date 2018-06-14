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
import { StudentMenuComponentComponent } from './student-menu-component/student-menu-component.component';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { StudentDetailsComponent } from './student-details/student-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  declarations: [
    StudentComponent,
    StudentSmallItemComponent,
    StudentEditComponent,
    StudentAddComponent,
    StudentListingComponent,
    StudentTableComponent,
    StudentMenuComponentComponent,
    StudentDetailsComponent
]
})
export class StudentModule { }
