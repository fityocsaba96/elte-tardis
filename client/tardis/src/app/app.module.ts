import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MarkMyProfessorService} from './services/mark-my-professor.service';
import {MarkMyProfessorComponent} from './components/mark-my-professor/mark-my-professor.component';


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
  bootstrap: [AppComponent]
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
