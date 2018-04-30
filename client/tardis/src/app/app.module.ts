import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SuiModule} from 'ng2-semantic-ui';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {AddFreeTimeComponent} from './components/add-free-time/add-free-time.component';
import {ContentComponent} from './components/content/content.component';
import {ExtraConditionsContainerComponent} from './components/extra-conditions-container/extra-conditions-container.component';
import {FreeTimeSettingsComponent} from './components/free-time-settings/free-time-settings.component';
import {FreeTimeTableComponent} from './components/free-time-table/free-time-table.component';
import {HeaderComponent} from './components/header/header.component';
// tslint:disable-next-line:max-line-length
import {MarkmyprofessorRatingSettingsComponent} from './components/markmyprofessor-rating-settings/markmyprofessor-rating-settings.component';
import {FacultyService} from './services/faculty.service';
import {FreeTimeService} from './services/free-time.service';
import {MarkmyprofessorRatingService} from './services/markmyprofessor-rating.service';
import {NotifierService} from './services/notifier.service';
import {OptimalTimetablesService} from './services/optimal-timetables.service';
import {SubjectService} from './services/subject.service';
import {TimeService} from './services/time.service';

@NgModule({
  declarations: [
    AppComponent,
    MarkmyprofessorRatingSettingsComponent,
    HeaderComponent,
    ContentComponent,
    ExtraConditionsContainerComponent,
    AddFreeTimeComponent,
    FreeTimeTableComponent,
    FreeTimeSettingsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SuiModule,
  ],
  providers: [
    NotifierService,
    MarkmyprofessorRatingService,
    FacultyService,
    FreeTimeService,
    OptimalTimetablesService,
    SubjectService,
    TimeService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
