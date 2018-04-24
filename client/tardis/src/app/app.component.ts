import {Component} from '@angular/core';
import {FacultyService} from './services/faculty.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';

  constructor(public facultyService: FacultyService) {
  }

}
