import {inject, TestBed} from '@angular/core/testing';

import {HttpClientModule} from '@angular/common/http';
import {FacultyService} from './faculty.service';
import {MarkmyprofessorRatingService} from './markmyprofessor-rating.service';

describe('MarkmyprofessorRatingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [MarkmyprofessorRatingService, FacultyService],
    });
  });

  it('should be created', inject([MarkmyprofessorRatingService], (service: MarkmyprofessorRatingService) => {
    expect(service).toBeTruthy();
  }));
});
