import {HttpClientModule} from '@angular/common/http';
import {async, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {SuiModule} from 'ng2-semantic-ui';
import {AppComponent} from './app.component';
import {AddFreeTimeComponent} from './components/add-free-time/add-free-time.component';
import {ContentComponent} from './components/content/content.component';
import {ExtraConditionsContainerComponent} from './components/extra-conditions-container/extra-conditions-container.component';
import {FreeTimeSettingsComponent} from './components/free-time-settings/free-time-settings.component';
import {FreeTimeTableComponent} from './components/free-time-table/free-time-table.component';
import {HeaderComponent} from './components/header/header.component';
// tslint:disable-next-line:max-line-length
import {MarkmyprofessorRatingSettingsComponent} from './components/markmyprofessor-rating-settings/markmyprofessor-rating-settings.component';
import { AddedSubjectTableComponent } from './components/subject-container/added-subject-table/added-subject-table.component';
import { SearchSubjectComponent } from './components/subject-container/search-subject/search-subject.component';
import { SearchedSubjectTableComponent } from './components/subject-container/searched-subject-table/searched-subject-table.component';
import {FacultyService} from './services/faculty.service';
import {MarkmyprofessorRatingService} from './services/markmyprofessor-rating.service';
import { SubjectService } from './services/subject.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        ContentComponent,
        ExtraConditionsContainerComponent,
        MarkmyprofessorRatingSettingsComponent,
        AddFreeTimeComponent,
        FreeTimeTableComponent,
        FreeTimeSettingsComponent,
        SearchedSubjectTableComponent,
        SearchSubjectComponent,
        AddedSubjectTableComponent,
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        SuiModule,
      ],
      providers: [MarkmyprofessorRatingService, FacultyService, SubjectService],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
