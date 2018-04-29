import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SuiModule } from 'ng2-semantic-ui';

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
import { SearchedSubjectTableComponent } from './components/subject-container/searched-subject-table/searched-subject-table.component';
import { SearchSubjectComponent } from './components/subject-container/search-subject/search-subject.component';
import { AddedSubjectTableComponent } from './components/subject-container/added-subject-table/added-subject-table.component';

import { FacultyService } from './services/faculty.service';
import { MarkmyprofessorRatingService } from './services/markmyprofessor-rating.service';
import { SubjectService } from './services/subject.service';

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
    SearchSubjectComponent,
    SearchedSubjectTableComponent,
    AddedSubjectTableComponent,
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
  ],
  providers: [MarkmyprofessorRatingService, FacultyService, SubjectService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
