import {HttpClientModule} from '@angular/common/http';
import {async, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {SuiModule} from 'ng2-semantic-ui';
import {AppComponent} from './app.component';
import {AddFreeTimeComponent} from './components/add-free-time/add-free-time.component';
import {ContentComponent} from './components/content/content.component';
import {EarliestStartSettingsComponent} from './components/earliest-start-settings/earliest-start-settings.component';
import {ExtraConditionsContainerComponent} from './components/extra-conditions-container/extra-conditions-container.component';
import {FreeTimeSettingsComponent} from './components/free-time-settings/free-time-settings.component';
import {FreeTimeTableComponent} from './components/free-time-table/free-time-table.component';
import {HeaderComponent} from './components/header/header.component';
import {LatestEndSettingsComponent} from './components/latest-end-settings/latest-end-settings.component';
// tslint:disable-next-line:max-line-length
import {MarkmyprofessorRatingSettingsComponent} from './components/markmyprofessor-rating-settings/markmyprofessor-rating-settings.component';
import {FacultyService} from './services/faculty.service';
import {MarkmyprofessorRatingService} from './services/markmyprofessor-rating.service';

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
        EarliestStartSettingsComponent,
        LatestEndSettingsComponent,
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        SuiModule,
      ],
      providers: [MarkmyprofessorRatingService, FacultyService],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
