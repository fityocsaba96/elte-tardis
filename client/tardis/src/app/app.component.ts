import {Component} from '@angular/core';
import {SuiLocalizationService} from 'ng2-semantic-ui';
import enGB from 'ng2-semantic-ui/locales/en-GB';
import {FacultyService} from './services/faculty.service';
import { SubjectService } from './services/subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(public facultyService: FacultyService,
              public localizationService: SuiLocalizationService,
              public subjectService: SubjectService) {
    localizationService.load('en-GB', enGB);
    localizationService.patch('en-GB', {
      datepicker: {
          formats: {
            time: 'HH:mm',
          },
      },
  });
    localizationService.setLanguage('en-GB');
  }
}
