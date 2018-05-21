import { Component, OnInit } from '@angular/core';
import { CourseType } from '../../../models/CourseType';
import { ISubject } from '../../../models/ISubject';
import { ISubjects } from '../../../models/ISubjects';
import { SubjectService } from '../../../services/subject.service';

@Component({
  selector: 'app-added-subject-table',
  templateUrl: './added-subject-table.component.html',
  styleUrls: ['./added-subject-table.component.css'],
})

export class AddedSubjectTableComponent implements OnInit {
  notConflicted: ISubject[];
  conflicted: ISubject[];
  subjects: ISubjects;

  constructor(private subjectService: SubjectService) {
    this.notConflicted = subjectService.getAddSubject();
    this.subjects = this.mergeSubjects();
  }

  ngOnInit() {
    this.conflicted = [];
  }

  addToConflicts(subject: ISubject) {
    if (subject.courseType === CourseType.Lecture) {
      this.deleteSubjectFromAddTable(subject);
      this.conflicted.push(subject);
      this.subjects = this.mergeSubjects();
    }
  }

  addToNotConflicts(subject: ISubject) {
    this.deleteSubjectFromArray(subject, this.conflicted);
    this.notConflicted.push(subject);
    this.subjects = this.mergeSubjects();
  }

  deleteSubjectFromAddTable(subject: ISubject) {
    this.deleteSubjectFromArray(subject, this.notConflicted);
    this.deleteSubjectFromArray(subject, this.conflicted);
    this.subjects = this.mergeSubjects();
  }

  deleteSubjectFromArray(subject: ISubject, array: ISubject[]) {
    const index = array.indexOf(subject);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  mergeSubjects(): ISubjects {
    return ({
      notConflicted: this.notConflicted,
      conflicted: this.conflicted,
    });
  }
}
