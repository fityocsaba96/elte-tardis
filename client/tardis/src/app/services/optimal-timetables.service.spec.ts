import {inject, TestBed} from '@angular/core/testing';

import {Day} from '../models/Day';
import {ITime} from '../models/ITime';
import {OptimalTimetablesService} from './optimal-timetables.service';

describe('OptimalTimetablesService', () => {
  let service: OptimalTimetablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OptimalTimetablesService],
    });
    service = TestBed.get(OptimalTimetablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('conflicts', () => {
    it('should not conflict when the times are on different days', () => {
      const timeA: ITime = { day: Day.Monday, startTime: '12:00', endTime: '14:00' };
      const timeB: ITime = { day: Day.Tuesday, startTime: '12:00', endTime: '14:00' };
      const conflict: boolean = OptimalTimetablesService.conflicts(timeA, timeB);
      expect(conflict).toBeFalsy();
    });

    it('should not conflict when the times are on same days but the time intervals doesnt have common parts', () => {
      const timeA: ITime = { day: Day.Tuesday, startTime: '12:00', endTime: '14:00' };
      const timeB: ITime = { day: Day.Tuesday, startTime: '15:00', endTime: '16:00' };
      const conflict: boolean = OptimalTimetablesService.conflicts(timeA, timeB);
      expect(conflict).toBeFalsy();
    });

    it('should conflict when the time intervals have common parts', () => {
      const timeA: ITime = { day: Day.Tuesday, startTime: '12:00', endTime: '14:00' };
      const timeB: ITime = { day: Day.Tuesday, startTime: '13:50', endTime: '15:00' };
      const conflict: boolean = OptimalTimetablesService.conflicts(timeA, timeB);
      expect(conflict).toBeTruthy();
    });
  });
});
