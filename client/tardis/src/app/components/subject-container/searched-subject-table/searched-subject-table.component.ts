import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../../services/subject.service';
import { ISubject } from '../../../models/ISubject';

@Component({
  selector: 'app-searched-subject-table',
  templateUrl: './searched-subject-table.component.html',
  styleUrls: ['./searched-subject-table.component.css'],
})

export class SearchedSubjectTableComponent implements OnInit {
  subjects: ISubject[];
  hidden: boolean;

  constructor(private searchSubjectService: SubjectService) {
    this.subjects = searchSubjectService.getSearchSubject();
   }

  ngOnInit() {
  }

  sendSubjectToAddTable(subject: ISubject) {
    this.searchSubjectService.addSubject(subject);
  }
}
