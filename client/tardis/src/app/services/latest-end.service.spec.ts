import {inject, TestBed} from '@angular/core/testing';

import {Day} from '../models/Day';
import {LatestEndService} from './latest-end.service';

describe('LatestEndService', () => {
  let service: LatestEndService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LatestEndService],
    });
    service = TestBed.get(LatestEndService);
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
    it('should return true when the latest end is after the end time of given time', () => {
      const offset: number = (new Date()).getTimezoneOffset() * 60000;
      service.latestEnd = new Date(1526806800000 + offset);
      expect(service.meetsCondition({ day: Day.Friday, startTime: '07:00', endTime: '08:00' })).toBeTruthy();
    });

    it('should return false when the latest end is before the end time of given time', () => {
      const offset: number = (new Date()).getTimezoneOffset() * 60000;
      service.latestEnd = new Date(1526806800000 + offset);
      expect(service.meetsCondition({ day: Day.Friday, startTime: '08:00', endTime: '10:00' })).toBeFalsy();
    });
  });
});
