import {HttpClientModule} from '@angular/common/http';
import {async, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {SuiModule} from 'ng2-semantic-ui';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
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
        MarkmyprofessorRatingSettingsComponent,
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
