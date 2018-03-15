import {TestBed, inject} from '@angular/core/testing';

import {MarkMyProfessorService} from './mark-my-professor.service';

describe('MarkMyProfessorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarkMyProfessorService]
    });
  });

  it('should be created', inject([MarkMyProfessorService], (service: MarkMyProfessorService) => {
    expect(service).toBeTruthy();
  }));
});
