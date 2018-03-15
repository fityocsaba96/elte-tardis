import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
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
    HttpClientModule
  ],
  providers: [MarkMyProfessorService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
