import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';
import {FacultyService} from '../../services/faculty.service';
import {FreeTimeService} from '../../services/free-time.service';
import {MarkmyprofessorRatingService} from '../../services/markmyprofessor-rating.service';
import {NotifierService} from '../../services/notifier.service';
import {AddFreeTimeComponent} from '../add-free-time/add-free-time.component';
import {FreeTimeSettingsComponent} from '../free-time-settings/free-time-settings.component';
import {FreeTimeTableComponent} from '../free-time-table/free-time-table.component';
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
      ],
      imports: [HttpClientModule, FormsModule, SuiModule],
      providers: [MarkmyprofessorRatingService, FacultyService, FreeTimeService, NotifierService],
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
