import {Component, OnInit} from '@angular/core';
import {MarkMyProfessorService} from '../../services/mark-my-professor.service';

@Component({
  selector: 'app-mark-my-professor',
  templateUrl: './mark-my-professor.component.html',
  styleUrls: ['./mark-my-professor.component.css']
})
export class MarkMyProfessorComponent implements OnInit {
  professor: string;

  constructor(private markMyProfessorService: MarkMyProfessorService) {
  }

  ngOnInit() {
    this.professor = 'Nagy_Sára';
    this.markMyProfessorService.getData(this.professor);
  }

}
