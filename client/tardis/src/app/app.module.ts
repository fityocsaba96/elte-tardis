import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';


import {ContentComponent} from './components/content/content.component';
import {ExtraConditionsContainerComponent} from './components/extra-conditions-container/extra-conditions-container.component';
import {HeaderComponent} from './components/header/header.component';
// tslint:disable-next-line:max-line-length
import {MarkmyprofessorRatingSettingsComponent} from './components/markmyprofessor-rating-settings/markmyprofessor-rating-settings.component';
import {FacultyService} from './services/faculty.service';
import {MarkmyprofessorRatingService} from './services/markmyprofessor-rating.service';

import { AppComponent } from './app.component';
import { SubjectService } from './services/subject.service';
import { SearchSubjectComponent } from './components/subject-container/search-subject/search-subject.component';
import { SearchedSubjectTable } from './components/subject-container/searched-subject-table/searched-subject-table.component';
import { AddedSubjectTable } from './components/subject-container/added-subject-table/added-subject-table.component';


@NgModule({
  declarations: [
    AppComponent,
    MarkmyprofessorRatingSettingsComponent,
    HeaderComponent,
    ContentComponent,
    ExtraConditionsContainerComponent,
    SearchSubjectComponent,
    SearchedSubjectTable,
    AddedSubjectTable
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    SuiModule,
  ],
  providers: [MarkmyprofessorRatingService, FacultyService, SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
