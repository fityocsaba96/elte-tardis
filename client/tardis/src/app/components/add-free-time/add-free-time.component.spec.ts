import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';

import {FreeTimeService} from '../../services/free-time.service';
import {NotifierService} from '../../services/notifier.service';
import {AddFreeTimeComponent} from './add-free-time.component';

describe('AddFreeTimeComponent', () => {
  let component: AddFreeTimeComponent;
  let fixture: ComponentFixture<AddFreeTimeComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
