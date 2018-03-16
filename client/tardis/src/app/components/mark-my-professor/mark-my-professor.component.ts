import {Component, OnInit} from '@angular/core';
import {MarkMyProfessorService} from '../../services/mark-my-professor.service';
import {Professor} from '../../models/professor';

@Component({
  selector: 'app-mark-my-professor',
  templateUrl: './mark-my-professor.component.html',
  styleUrls: ['./mark-my-professor.component.css']
})
export class MarkMyProfessorComponent implements OnInit {
  searchName: string;
  professors: Professor[];

  constructor(private markMyProfessorService: MarkMyProfessorService) {
  }

  ngOnInit() {
    this.searchName = 'Nagy Gábor';

    this.markMyProfessorService.getData(this.searchName, '1')
      .subscribe(result => {
          this.professors = this.markMyProfessorService.parseHtml(result);
        }
        , err => {
          console.log(err);
        });
  }

}
