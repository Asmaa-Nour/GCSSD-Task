import { Component, OnInit, TemplateRef } from '@angular/core';
import {NgControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Iinstructor } from '../../shared/interfaces/Iinstructor';
import { InstructorServiceService } from '../../shared/services/instructor-service.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-instructor-edit',
  templateUrl: './instructor-edit.component.html',
  styleUrls: ['./instructor-edit.component.css']
})
export class InstructorEditComponent implements OnInit {
  i: Iinstructor;
  editForm: FormGroup;
  id:number;
  modalRef: BsModalRef;
  constructor(private InstructorServiceService:InstructorServiceService,private activatedRoute:ActivatedRoute,private route:Router , private modalService: BsModalService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params)=>{this.id=params['id'];});
    this.i = this.InstructorServiceService.getById(this.id);

    this.editForm=new FormGroup({
      name: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      courses: new FormControl(),
      department: new FormControl(),
    });
  }
  update(){
    this.i={
      id:this.id,
      name:this.editForm.get('name').value,
      phone:this.editForm.get('phone').value,
      email:this.editForm.get('email').value,
      Courses:this.editForm.get('courses').value,
      Department:this.editForm.get('department').value,
      image:'../../../assets/Unknown.jpg'
    }
    this.InstructorServiceService.update(this.i);
    this.route.navigate(['instructor/component']);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
