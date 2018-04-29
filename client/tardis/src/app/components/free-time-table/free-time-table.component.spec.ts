import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Day} from '../../models/Day';
import {IFreeTime} from '../../models/IFreeTime';
import {FreeTimeService} from '../../services/free-time.service';
import {NotifierService} from '../../services/notifier.service';
import {FreeTimeTableComponent} from './free-time-table.component';

describe('FreeTimeTableComponent', () => {
  let component: FreeTimeTableComponent;
  let fixture: ComponentFixture<FreeTimeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeTimeTableComponent ],
      providers: [FreeTimeService, NotifierService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeTimeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('delete', () => {
    it('should delete the added free time', () => {
      const freeTime: IFreeTime = { name: 'lunch', time: { day: Day.Friday, startTime: '12:00', endTime: '13:00' } };
      component.freeTimes.push(freeTime);
      component.delete(freeTime);
      expect(component.freeTimes.length).toBe(0);
      // TODO: check in service too
    });
  });
});
