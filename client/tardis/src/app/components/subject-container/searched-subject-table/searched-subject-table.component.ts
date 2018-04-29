import { Component, OnInit } from "@angular/core";
import { SubjectService } from "../../../services/subject.service";
import { Subject } from "../../../models/subject";

@Component({
  selector: 'searched-subject-table',
  templateUrl: './searched-subject-table.component.html',
  styleUrls: ['./searched-subject-table.component.css']
})

export class SearchedSubjectTable implements OnInit{
  
  subjects: Subject[];

  constructor(private searchSubjectService: SubjectService) {
    this.subjects = searchSubjectService.getSearchSubject();
   }

  ngOnInit() {
  }

  sendSubjectToAddTable(subject: Subject) {
    this.searchSubjectService.addSubject(subject);
  }

  
}




