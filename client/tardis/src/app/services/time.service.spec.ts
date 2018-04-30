import {inject, TestBed} from '@angular/core/testing';

import {Day} from '../models/Day';
import {ITime} from '../models/ITime';
import {TimeService} from './time.service';

describe('TimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeService],
    });
  });

  it('should be created', inject([TimeService], (service: TimeService) => {
    expect(service).toBeTruthy();
  }));

  describe('conflicts', () => {
    it('should not conflict when the times are on different days', () => {
      const timeA: ITime = { day: Day.Monday, startTime: '12:00', endTime: '14:00' };
      const timeB: ITime = { day: Day.Tuesday, startTime: '12:00', endTime: '14:00' };
      const conflict: boolean = TimeService.conflicts(timeA, timeB);
      expect(conflict).toBeFalsy();
    });

    it('should not conflict when the times are on same days but the time intervals doesnt have common parts', () => {
      const timeA: ITime = { day: Day.Tuesday, startTime: '12:00', endTime: '14:00' };
      const timeB: ITime = { day: Day.Tuesday, startTime: '15:00', endTime: '16:00' };
      const conflict: boolean = TimeService.conflicts(timeA, timeB);
      expect(conflict).toBeFalsy();
    });

    it('should conflict when the time intervals have common parts', () => {
      const timeA: ITime = { day: Day.Tuesday, startTime: '12:00', endTime: '14:00' };
      const timeB: ITime = { day: Day.Tuesday, startTime: '13:50', endTime: '15:00' };
      const conflict: boolean = TimeService.conflicts(timeA, timeB);
      expect(conflict).toBeTruthy();
    });
  });
});
