import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';
import {EarliestStartService} from '../../services/earliest-start.service';
import {FacultyService} from '../../services/faculty.service';
import {FreeTimeService} from '../../services/free-time.service';
import {LatestEndService} from '../../services/latest-end.service';
import {MarkmyprofessorRatingService} from '../../services/markmyprofessor-rating.service';
import {NotifierService} from '../../services/notifier.service';
import {AddFreeTimeComponent} from '../add-free-time/add-free-time.component';
import {EarliestStartSettingsComponent} from '../earliest-start-settings/earliest-start-settings.component';
import {FreeTimeSettingsComponent} from '../free-time-settings/free-time-settings.component';
import {FreeTimeTableComponent} from '../free-time-table/free-time-table.component';
import {LatestEndSettingsComponent} from '../latest-end-settings/latest-end-settings.component';
import {MarkmyprofessorRatingSettingsComponent} from '../markmyprofessor-rating-settings/markmyprofessor-rating-settings.component';
import {ExtraConditionsContainerComponent} from './extra-conditions-container.component';

describe('ExtraConditionsContainerComponent', () => {
  let component: ExtraConditionsContainerComponent;
  let fixture: ComponentFixture<ExtraConditionsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExtraConditionsContainerComponent,
        MarkmyprofessorRatingSettingsComponent,
        AddFreeTimeComponent,
        FreeTimeTableComponent,
        FreeTimeSettingsComponent,
        EarliestStartSettingsComponent,
        LatestEndSettingsComponent,
      ],
      imports: [HttpClientModule, FormsModule, SuiModule],
      providers: [MarkmyprofessorRatingService, FacultyService, FreeTimeService, NotifierService, EarliestStartService, LatestEndService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraConditionsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
