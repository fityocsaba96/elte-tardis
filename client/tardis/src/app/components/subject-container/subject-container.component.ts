import {Component, OnInit} from '@angular/core';
import {SubjectService} from '../../services/subject.service';

@Component({
  selector: 'app-subject-container',
  templateUrl: './subject-container.component.html',
  styleUrls: ['./subject-container.component.css'],
})
export class SubjectContainerComponent implements OnInit {

  testSubjects: string;

  constructor(private subjectService: SubjectService) {
  }

  ngOnInit() {
    this.testSubjects = JSON.stringify(this.subjectService.subjects, null, 4); // test data
  }

}
