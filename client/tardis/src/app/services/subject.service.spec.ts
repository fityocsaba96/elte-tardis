import {HttpClientTestingModule} from '@angular/common/http/testing';
import {inject, TestBed} from '@angular/core/testing';

import {SubjectService} from './subject.service';

describe('SubjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SubjectService],
    });
  });

  it('should be created', inject([SubjectService], (service: SubjectService) => {
    expect(service).toBeTruthy();
  }));
});
