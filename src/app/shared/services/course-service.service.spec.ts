/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CourseServiceService } from './course-service.service';

describe('Service: CourseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseServiceService]
    });
  });

  it('should ...', inject([CourseServiceService], (service: CourseServiceService) => {
    expect(service).toBeTruthy();
  }));
});
