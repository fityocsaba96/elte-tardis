import {Component, OnInit} from '@angular/core';
import {FacultyService} from '../../services/faculty.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  faculties: string[];
  selectedFaculty: string;

  constructor(private facultyService: FacultyService) {
  }

  ngOnInit() {
    this.faculties = [
      'IK', 'TTK', 'TÁTK',
    ];
    this.selectedFaculty = this.faculties[0];
  }

  onFacultySelect(faculty: string) {
    this.selectedFaculty = faculty;
    this.facultyService.selectFaculty(faculty);
  }

}
