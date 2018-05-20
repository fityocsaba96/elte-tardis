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

  constructor(private subjectService: SubjectService) {
  }

  ngOnInit() {
    this.subjects = JSON.stringify(this.subjectService.subjects, null, 4); // test data
  }

}
