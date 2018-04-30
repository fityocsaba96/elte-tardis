import {inject, TestBed} from '@angular/core/testing';

import {HttpClientModule} from '@angular/common/http';
import {Day} from '../models/Day';
import {ITime} from '../models/ITime';
import {FacultyService} from './faculty.service';
import {FreeTimeService} from './free-time.service';
import {MarkmyprofessorRatingService} from './markmyprofessor-rating.service';
import {NotifierService} from './notifier.service';
import {OptimalTimetablesService} from './optimal-timetables.service';
import {SubjectService} from './subject.service';

describe('OptimalTimetablesService', () => {
  let service: OptimalTimetablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [OptimalTimetablesService, MarkmyprofessorRatingService, FacultyService, FreeTimeService, SubjectService, NotifierService],
    });
    service = TestBed.get(OptimalTimetablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
