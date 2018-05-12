import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../../services/subject.service';

@Component({
  selector: 'app-search-subject',
  templateUrl: './search-subject.component.html',
  styleUrls: ['./search-subject.component.css'],
})

export class SearchSubjectComponent implements OnInit {

  search: string;
  error: string;
  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.search = '';
    this.error = '';
  }

  getSubject(subjectName: string) {
    this.subjectService.getData(subjectName)
    .subscribe( (res) => {
      try {
        this.subjectService.parseHtml(res);
        this.error = '';
      } catch (Exception) {
        this.error = 'Nincs ilyen tárgy';
        throw new Error();
      }
    }, (err) => {
          });
  }
}
