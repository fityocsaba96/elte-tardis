import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {MarkMyProfessorComponent} from './components/mark-my-professor/mark-my-professor.component';
import {MarkMyProfessorService} from './services/mark-my-professor.service';

@NgModule({
  declarations: [
    AppComponent,
    MarkMyProfessorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [MarkMyProfessorService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
