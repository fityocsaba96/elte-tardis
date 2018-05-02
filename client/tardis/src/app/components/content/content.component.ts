import {Component, OnInit} from '@angular/core';
import {ISubjects} from '../../models/ISubjects';
import {OptimalTimetablesService} from '../../services/optimal-timetables.service';
import {SubjectService} from '../../services/subject.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {

  subjects: string;
  timetables: string;

  constructor(private subjectService: SubjectService,
              private optimalTimetablesService: OptimalTimetablesService) {
  }

  ngOnInit() {
    this.subjects = JSON.stringify(this.subjectService.subjects, null, 4); // test data
  }

  async generateTimetables() { // test
    const timetables = await this.optimalTimetablesService.generateOptimalTimetables();
    this.timetables = JSON.stringify(timetables, null, 4);
  }
}
