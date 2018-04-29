import {inject, TestBed} from '@angular/core/testing';

import {OptimalTimetablesService} from './optimal-timetables.service';

describe('OptimalTimetablesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OptimalTimetablesService],
    });
  });

  it('should be created', inject([OptimalTimetablesService], (service: OptimalTimetablesService) => {
    expect(service).toBeTruthy();
  }));
});
