import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../../services/subject.service';
import { ISubject } from '../../../models/ISubject';

@Component({
  selector: 'app-added-subject-table',
  templateUrl: './added-subject-table.component.html',
  styleUrls: ['./added-subject-table.component.css'],
})

export class AddedSubjectTableComponent implements OnInit {
  subjects: ISubject[];
  conflicts: ISubject[];
  hidden: boolean;

  constructor(private subjectService: SubjectService) {
    this.subjects = subjectService.getAddSubject();
   }

   ngOnInit() {
    this.conflicts = [];
  }

   addToConflicts(subject: ISubject) {
      this.deleteSubjectFromConflicts(subject);
      this.conflicts.push(subject);
   }

   deleteSubjectFromAddTable(subject: ISubject) {
     const index = this.subjects.indexOf(subject);
     if (index !== -1) {
        this.subjects.splice(index, 1);
      }
   }

   deleteSubjectFromConflicts(subject: ISubject) {
    const index = this.conflicts.indexOf(subject);
    if (index !== -1) {
        this.conflicts.splice(index, 1);
      }
  }
}
