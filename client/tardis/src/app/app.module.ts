import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SuiModule} from 'ng2-semantic-ui';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {ContentComponent} from './components/content/content.component';
import {ExtraConditionsContainerComponent} from './components/extra-conditions-container/extra-conditions-container.component';
import {HeaderComponent} from './components/header/header.component';
// tslint:disable-next-line:max-line-length
import {MarkmyprofessorRatingSettingsComponent} from './components/markmyprofessor-rating-settings/markmyprofessor-rating-settings.component';
import {FacultyService} from './services/faculty.service';
import {MarkmyprofessorRatingService} from './services/markmyprofessor-rating.service';

@NgModule({
  declarations: [
    AppComponent,
    MarkmyprofessorRatingSettingsComponent,
    HeaderComponent,
    ContentComponent,
    ExtraConditionsContainerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SuiModule,
  ],
  providers: [MarkmyprofessorRatingService, FacultyService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
