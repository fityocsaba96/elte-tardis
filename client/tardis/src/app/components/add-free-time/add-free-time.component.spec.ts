import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';

import {Day} from '../../models/Day';
import {FreeTimeService} from '../../services/free-time.service';
import {NotifierService} from '../../services/notifier.service';
import {AddFreeTimeComponent} from './add-free-time.component';

describe('AddFreeTimeComponent', () => {
  let component: AddFreeTimeComponent;
  let fixture: ComponentFixture<AddFreeTimeComponent>;
  let freeTimeService: FreeTimeService;
  let notifierService: NotifierService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddFreeTimeComponent],
      imports: [FormsModule, SuiModule],
      providers: [FreeTimeService, NotifierService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFreeTimeComponent);
    component = fixture.componentInstance;
    freeTimeService = TestBed.get(FreeTimeService);
    notifierService = TestBed.get(NotifierService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('add', () => {
    it('should add free time with valid input', () => {
      spyOn(freeTimeService, 'add');
      spyOn(notifierService, 'notifyFreeTimeAdded');
      component.name = 'sad';
      component.day = Day.Friday;
      component.startDate = new Date(1524999176000);
      component.endDate = new Date(1525001176000);
      component.add();

      expect(freeTimeService.add).toHaveBeenCalled();
      expect(notifierService.notifyFreeTimeAdded).toHaveBeenCalled();
    });

    it('should not add free time with invalid input', () => {
      spyOn(freeTimeService, 'add');
      component.name = 'sad';
      component.day = Day.Friday;
      component.startDate = new Date(1525001176000);
      component.endDate = new Date(1524999176000);
      component.add();

      expect(freeTimeService.add).not.toHaveBeenCalled();
    });
  });
});
