import {inject, TestBed} from '@angular/core/testing';

import {MarkMyProfessorService} from './mark-my-professor.service';
import {HttpClientModule} from '@angular/common/http';

describe('MarkMyProfessorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [MarkMyProfessorService]
    });
  });

  it('should be created', inject([MarkMyProfessorService], (service: MarkMyProfessorService) => {
    expect(service).toBeTruthy();
  }));
});
