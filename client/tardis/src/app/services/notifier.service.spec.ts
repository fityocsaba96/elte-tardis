import {inject, TestBed} from '@angular/core/testing';

import {Day} from '../models/Day';
import {IFreeTime} from '../models/IFreeTime';
import {NotifierService} from './notifier.service';

describe('NotifierService', () => {
  let service: NotifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotifierService],
    });
    service = TestBed.get(NotifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('notifyFreeTimeAdded', () => {
    it('should notify the subscribed object', () => {
      const freeTime: IFreeTime = { name: 'asd', time: { day: Day.Tuesday, startTime: '12:00', endTime: '14:00' } };
      service.freeTimeAdded.subscribe((value) => {
        expect(value).toBe(freeTime);
      });
      service.notifyFreeTimeAdded(freeTime);
    });
  });

  describe('notifyMarkmyprofessorRatingFound', () => {
    it('should notify the subscribed object', () => {
      const meets = true;
      service.markmyprofessorRatingFound.subscribe((value) => {
        expect(value).toBe(meets);
      });
      service.notifyMarkmyprofessorRatingFound(meets);
    });
  });
});
