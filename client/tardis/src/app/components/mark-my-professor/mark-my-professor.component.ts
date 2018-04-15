import {Component, OnInit} from '@angular/core';
import {MarkMyProfessorService} from '../../services/mark-my-professor.service';
import {Professor} from '../../models/professor';

@Component({
  selector: 'app-mark-my-professor',
  templateUrl: './mark-my-professor.component.html',
  styleUrls: ['./mark-my-professor.component.css']
})
export class MarkMyProfessorComponent implements OnInit {
  mmpUrl = 'www.markmyprofessor.com/';
  searchName: string;
  faculties: string[];
  selectedFaculty: string;
  professors: Professor[];
  filteredProfessors: Professor[];
  numberOfPages: number;

  constructor(private markMyProfessorService: MarkMyProfessorService) {
  }

  ngOnInit() {
    this.searchName = 'Kériné Dr. Borsodi Andrea';
    this.faculties = [
      'ELTE-IK',
      'ELTE-TTK',
      'ELTE-TÁTK'
    ];
    this.selectedFaculty = 'ELTE-IK';
    this.professors = [];
    this.filteredProfessors = [];
    this.numberOfPages = 0;
  }

  getProfessors(rating?: number) {
    return this.professors.filter(p => p.rating >= rating);
  }

  findProfessor(professorName: string) {
    return this.professors.find(p => p.name.includes(professorName));
  }

  getRatingFor(professorName: string, faculty: string, page: string) {
    if (this.findProfessor(professorName) !== undefined) {
      return;
    }
    professorName = professorName.toLowerCase();
    if (professorName.startsWith('prof.')) {
      professorName = professorName.substr(6, professorName.length).trim();
    }
    if (professorName.startsWith('dr.')) {
      professorName = professorName.substr(4, professorName.length).trim();
    }
    if (professorName.endsWith('dr.')) {
      professorName = professorName.substr(0, professorName.length - 4).trim();
    }
    if (professorName.endsWith('prof.')) {
      professorName = professorName.substr(0, professorName.length - 6).trim();
    }
    console.log(professorName);
    this.markMyProfessorService.getData(professorName, page)
      .subscribe(firstPage => {
        this.checkNumberOfPages(this.parseHtml(firstPage, faculty));
        if (this.numberOfPages > 1) {
          for (let i = 2; i <= this.numberOfPages; ++i) {
            this.markMyProfessorService.getData(professorName, i.toString())
              .subscribe(otherPage => {
                this.parseHtml(otherPage, faculty);
              }, err => {
                console.log(err);
              });
          }
        }
      }, err => {
        console.log(err);
      });
  }

  parseHtml(html: string, faculty: string): Document {
    const parser = new DOMParser();
    const document = parser.parseFromString(html, 'text/html');
    const table = document.querySelector('tbody');
    if (table == null) {
      return;
    }
    const rows = Array.from(table.querySelectorAll('tr'));
    rows.forEach(row => {
      const school = row.cells[5].innerText.trim();
      const rating = Number(row.cells[4].innerText.trim());
      if (school === faculty && rating > 0.0) {
        const nameCell = row.querySelector('a');
        this.professors.push({
          name: nameCell.innerText.trim(),
          link: 'http://' + this.mmpUrl + nameCell.pathname,
          rating: rating,
          school: school,
        });
      }
    });
    return document;
  }

  checkNumberOfPages(document: Document) {
    if (document === undefined) {
      return;
    }
    this.numberOfPages = 1;
    const pager = document.querySelector('div[class=pager]');
    if (pager != null) {
      const pages = Array.from(pager.querySelectorAll('a'));
      pages.forEach(page => {
        if (!Number.isNaN(Number.parseInt(page.innerHTML.trim()))) {
          this.numberOfPages += 1;
        }
      });
    }
  }

}
