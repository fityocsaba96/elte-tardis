import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';
import {FacultyService} from '../../services/faculty.service';
import {MarkmyprofessorRatingService} from '../../services/markmyprofessor-rating.service';
import {AddFreeTimeComponent} from '../add-free-time/add-free-time.component';
import {ExtraConditionsContainerComponent} from '../extra-conditions-container/extra-conditions-container.component';
import {FreeTimeSettingsComponent} from '../free-time-settings/free-time-settings.component';
import {FreeTimeTableComponent} from '../free-time-table/free-time-table.component';
import {MarkmyprofessorRatingSettingsComponent} from '../markmyprofessor-rating-settings/markmyprofessor-rating-settings.component';
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
      ],
      imports: [HttpClientModule, FormsModule, SuiModule],
      providers: [MarkmyprofessorRatingService, FacultyService],
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
