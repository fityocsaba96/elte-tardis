import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Day} from '../../models/Day';
import {IFreeTime} from '../../models/IFreeTime';
import {FreeTimeTableComponent} from './free-time-table.component';

describe('FreeTimeTableComponent', () => {
  let component: FreeTimeTableComponent;
  let fixture: ComponentFixture<FreeTimeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeTimeTableComponent ],
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

  describe('deleteFreeTime', () => {
    it('should delete the added free time', () => {
      const freeTime: IFreeTime = { name: 'lunch', day: Day.Friday, startTime: '12:00', endTime: '13:00' };
      component.freeTimes.push(freeTime);
      component.deleteFreeTime(freeTime);
      expect(component.freeTimes.length).toBe(0);
      // TODO: check in service too
    });
  });
});
