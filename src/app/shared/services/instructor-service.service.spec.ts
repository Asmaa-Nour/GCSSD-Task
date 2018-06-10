/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InstructorServiceService } from './instructor-service.service';

describe('Service: InstructorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstructorServiceService]
    });
  });

  it('should ...', inject([InstructorServiceService], (service: InstructorServiceService) => {
    expect(service).toBeTruthy();
  }));
});
