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
  hidden: boolean;

  constructor(private searchSubjectService: SubjectService) {
    this.subjects = searchSubjectService.getSearchSubject();
    if(this.subjects.length > 0) {
      this.hidden = false;
    }
   }

  ngOnInit() {
    this.hidden = true;
  }

  sendSubjectToAddTable(subject: Subject) {
    this.searchSubjectService.addSubject(subject);
  }

  
}




