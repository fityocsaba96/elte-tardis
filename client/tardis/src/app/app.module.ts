import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MarkMyProfessorService} from './services/mark-my-professor.service';
import {MarkMyProfessorComponent} from './components/mark-my-professor/mark-my-professor.component';
import {RequestInterceptor} from './services/request-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    MarkMyProfessorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MarkMyProfessorService, {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true, }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
