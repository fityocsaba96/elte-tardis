import { Component, OnInit } from "@angular/core";
import { SubjectService } from "../../../services/subject.service";
import { Subject } from "../../../models/subject";

@Component({
  selector: 'search-subject',
  templateUrl: './search-subject.component.html',
  styleUrls: ['./search-subject.component.css']
})

export class SearchSubjectComponent implements OnInit{

  constructor(private SubjectService: SubjectService) { }

  ngOnInit() {
  }

  getSubject(subjectName: string) {
    this.SubjectService.getData(subjectName)
    .subscribe( (res) => {
      this.SubjectService.parseHtml(res);
    }, (err) => {
      console.log(err);
    });
  }
}




