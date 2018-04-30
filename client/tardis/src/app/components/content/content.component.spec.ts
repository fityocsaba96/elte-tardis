import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';
import {FacultyService} from '../../services/faculty.service';
import {FreeTimeService} from '../../services/free-time.service';
import {MarkmyprofessorRatingService} from '../../services/markmyprofessor-rating.service';
import {NotifierService} from '../../services/notifier.service';
import {AddFreeTimeComponent} from '../add-free-time/add-free-time.component';
import {ExtraConditionsContainerComponent} from '../extra-conditions-container/extra-conditions-container.component';
import {FreeTimeSettingsComponent} from '../free-time-settings/free-time-settings.component';
import {FreeTimeTableComponent} from '../free-time-table/free-time-table.component';
import {MarkmyprofessorRatingSettingsComponent} from '../markmyprofessor-rating-settings/markmyprofessor-rating-settings.component';
import {ContentComponent} from './content.component';

import { SubjectService } from '../../services/subject.service';
import { AddedSubjectTableComponent } from '../subject-container/added-subject-table/added-subject-table.component';
import { SearchSubjectComponent } from '../subject-container/search-subject/search-subject.component';
import { SearchedSubjectTableComponent } from '../subject-container/searched-subject-table/searched-subject-table.component';

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
        AddedSubjectTableComponent,
        SearchSubjectComponent,
        SearchedSubjectTableComponent,
      ],
      imports: [HttpClientModule, FormsModule, SuiModule],
      providers: [MarkmyprofessorRatingService, FacultyService, FreeTimeService, NotifierService, SubjectService],
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
