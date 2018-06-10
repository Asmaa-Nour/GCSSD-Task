import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Iinstructor } from '../../shared/interfaces/Iinstructor';
import { InstructorServiceService } from '../../shared/services/instructor-service.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-instructor-small-item',
  templateUrl: './instructor-small-item.component.html',
  styleUrls: ['./instructor-small-item.component.css']
})
export class InstructorSmallItemComponent implements OnInit {
  @Input() instructor:Iinstructor;
  
  modalRef: BsModalRef;
  constructor(private InstructorServiceService:InstructorServiceService,private modalService: BsModalService) { }

  ngOnInit() {
  }
  delete(){
    this.InstructorServiceService.delete(this.instructor.id);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
