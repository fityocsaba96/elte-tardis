import {inject, TestBed} from '@angular/core/testing';

import {Day} from '../models/Day';
import {EarliestStartService} from './earliest-start.service';

describe('EarliestStartService', () => {
  let service: EarliestStartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EarliestStartService],
    });
    service = TestBed.get(EarliestStartService);
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
    it('should return true when the earliest start is before the start time of given time', () => {
      const offset: number = (new Date()).getTimezoneOffset() * 60000;
      service.earliestStart = new Date(1526806800000 + offset);
      expect(service.meetsCondition({ day: Day.Friday, startTime: '10:00', endTime: '12:00' })).toBeTruthy();
    });

    it('should return false when the earliest start is after the start time of given time', () => {
      const offset: number = (new Date()).getTimezoneOffset() * 60000;
      service.earliestStart = new Date(1526806800000 + offset);
      expect(service.meetsCondition({ day: Day.Friday, startTime: '08:00', endTime: '10:00' })).toBeFalsy();
    });
  });
});
