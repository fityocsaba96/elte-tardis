import {inject, TestBed} from '@angular/core/testing';

import {Day} from '../models/Day';
import {FreeTimeService} from './free-time.service';

describe('FreeTimeService', () => {
  let service: FreeTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FreeTimeService],
    });
    service = TestBed.get(FreeTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('isValid', () => {
    it('should return true on valid input', () => {
      const valid: boolean = service.isValid('sad', Day.Friday, new Date(1524999176000), new Date(1525001176000));
      expect(valid).toBeTruthy();
    });

    it('should return false if given time conflicts with another', () => {
      service.add('sad', Day.Friday, new Date(1524999176000), new Date(1525001176000));
      const valid: boolean = service.isValid('sad', Day.Friday, new Date(1525000176000), new Date(1525002176000));
      expect(valid).toBeFalsy();
    });
  });

  describe('add', () => {
    it('should parse and add free time', () => {
      const offset: number = (new Date()).getTimezoneOffset() * 60000;
      service.add('sad', Day.Friday, new Date(1524999176000 + offset), new Date(1525001176000 + offset));
      expect(service.freeTimes.length).toBe(1);
      expect(service.freeTimes[0].time.startTime).toBe('10:52');
    });
  });

  describe('delete', () => {
    it('should delete free time with given index', () => {
      service.add('sad', Day.Friday, new Date(1524999176000), new Date(1525001176000));
      service.delete(0);
      expect(service.freeTimes.length).toBe(0);
    });
  });

  describe('toggleApply', () => {
    it('should toggle apply state', () => {
      expect(service.apply).toBeFalsy();
      service.toggleApply();
      expect(service.apply).toBeTruthy();
    });
  });
});
