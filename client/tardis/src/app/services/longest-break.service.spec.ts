import {inject, TestBed} from '@angular/core/testing';

import {Day} from '../models/Day';
import {ITime} from '../models/ITime';
import {LongestBreakService} from './longest-break.service';

describe('LongestBreakService', () => {
  let service: LongestBreakService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LongestBreakService],
    });
    service = TestBed.get(LongestBreakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('toggleApply', () => {
    it('should toggle apply state', () => {
      expect(service.apply).toBeFalsy();
      service.toggleApply();
      expect(service.apply).toBeTruthy();
    });
  });

  describe('meetsCondition', () => {
    it('should return true when the times are on different days', () => {
      service.longestBreak = 1;
      const timeA: ITime = { day: Day.Monday, startTime: '12:00', endTime: '14:00' };
      const timeB: ITime = { day: Day.Friday, startTime: '16:00', endTime: '18:00' };
      expect(service.meetsCondition(timeA, timeB)).toBeTruthy();
    });

    it('should return true when the break between the end of first time and the start of second time is less than longest break', () => {
      service.longestBreak = 2;
      const timeA: ITime = { day: Day.Friday, startTime: '12:00', endTime: '14:00' };
      const timeB: ITime = { day: Day.Friday, startTime: '15:00', endTime: '17:00' };
      expect(service.meetsCondition(timeA, timeB)).toBeTruthy();
      expect(service.meetsCondition(timeB, timeA)).toBeTruthy();
    });

    it('should return false when the break between the end of first time and the start of second time is more than longest break', () => {
      service.longestBreak = 2;
      const timeA: ITime = { day: Day.Friday, startTime: '12:00', endTime: '14:00' };
      const timeB: ITime = { day: Day.Friday, startTime: '17:00', endTime: '19:00' };
      expect(service.meetsCondition(timeA, timeB)).toBeFalsy();
      expect(service.meetsCondition(timeB, timeA)).toBeFalsy();
    });
  });
});
