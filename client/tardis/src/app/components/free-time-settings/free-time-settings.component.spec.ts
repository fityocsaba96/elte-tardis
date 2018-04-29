import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';

import {FreeTimeService} from '../../services/free-time.service';
import {NotifierService} from '../../services/notifier.service';
import {AddFreeTimeComponent} from '../add-free-time/add-free-time.component';
import {FreeTimeTableComponent} from '../free-time-table/free-time-table.component';
import {FreeTimeSettingsComponent} from './free-time-settings.component';

describe('FreeTimeSettingsComponent', () => {
  let component: FreeTimeSettingsComponent;
  let fixture: ComponentFixture<FreeTimeSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FreeTimeSettingsComponent,
        FreeTimeTableComponent,
        AddFreeTimeComponent,
      ],
      imports: [FormsModule, SuiModule],
      providers: [FreeTimeService, NotifierService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeTimeSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
