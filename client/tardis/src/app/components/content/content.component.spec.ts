import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';
import {EarliestStartService} from '../../services/earliest-start.service';
import {FacultyService} from '../../services/faculty.service';
import {FreeTimeService} from '../../services/free-time.service';
import {LatestEndService} from '../../services/latest-end.service';
import {LongestBreakService} from '../../services/longest-break.service';
import {MarkmyprofessorRatingService} from '../../services/markmyprofessor-rating.service';
import {NotifierService} from '../../services/notifier.service';
import {OptimalTimetablesService} from '../../services/optimal-timetables.service';
import {SubjectService} from '../../services/subject.service';
import {AddFreeTimeComponent} from '../add-free-time/add-free-time.component';
import {EarliestStartSettingsComponent} from '../earliest-start-settings/earliest-start-settings.component';
import {ExtraConditionsContainerComponent} from '../extra-conditions-container/extra-conditions-container.component';
import {FreeTimeSettingsComponent} from '../free-time-settings/free-time-settings.component';
import {FreeTimeTableComponent} from '../free-time-table/free-time-table.component';
import {LatestEndSettingsComponent} from '../latest-end-settings/latest-end-settings.component';
import {LongestBreakSettingsComponent} from '../longest-break-settings/longest-break-settings.component';
import {MarkmyprofessorRatingSettingsComponent} from '../markmyprofessor-rating-settings/markmyprofessor-rating-settings.component';
import {OptimalTimetablesContainerComponent} from '../optimal-timetables-container/optimal-timetables-container.component';
import {TimetablePaginatorComponent} from '../timetable-paginator/timetable-paginator.component';
import {TimetableComponent} from '../timetable/timetable.component';
import {ContentComponent} from './content.component';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContentComponent,
        ExtraConditionsContainerComponent,
        MarkmyprofessorRatingSettingsComponent,
        AddFreeTimeComponent,
        FreeTimeTableComponent,
        FreeTimeSettingsComponent,
        OptimalTimetablesContainerComponent,
        TimetableComponent,
        TimetablePaginatorComponent,
        EarliestStartSettingsComponent,
        LatestEndSettingsComponent,
        LongestBreakSettingsComponent,
      ],
      imports: [HttpClientModule, FormsModule, SuiModule],
      providers: [
        MarkmyprofessorRatingService,
        FacultyService,
        FreeTimeService,
        NotifierService,
        SubjectService,
        OptimalTimetablesService,
        EarliestStartService,
        LatestEndService,
        LongestBreakService,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
