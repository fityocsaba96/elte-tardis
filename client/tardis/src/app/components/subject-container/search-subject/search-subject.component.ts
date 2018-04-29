import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../../services/subject.service';

@Component({
  selector: 'app-search-subject',
  templateUrl: './search-subject.component.html',
  styleUrls: ['./search-subject.component.css'],
})

export class SearchSubjectComponent implements OnInit {

  search: string;
  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.search = '';
  }

  getSubject(subjectName: string) {
    this.subjectService.getData(subjectName)
    .subscribe( (res) => {
      this.subjectService.parseHtml(res);
    }, (err) => {
      console.log(err);
    });
  }
}
