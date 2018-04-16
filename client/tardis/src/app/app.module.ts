import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AddingSubjectsComponent } from './components/adding-subjects/adding-subjects.component';
import { AddingSubjectService } from './services/adding-subject.service';


@NgModule({
  declarations: [
    AppComponent,
    AddingSubjectsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [AddingSubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
