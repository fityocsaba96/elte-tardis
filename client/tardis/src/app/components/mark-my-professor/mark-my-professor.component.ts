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

  static stripName(rawName) {
    const bracketIndex = rawName.indexOf('(');
    let name = bracketIndex === -1 ? rawName : rawName.substr(0, bracketIndex);
    const names = name.split(' ');
    let dotIndex;
    for (let i = 0; i < names.length; i++) {
      if (names[i].includes('.')) {
        dotIndex = i;
      }
    }
    if (dotIndex < names.length / 2) {
      name = `${names[dotIndex + 1]} ${names[dotIndex + 2]}`;
    } else {
      name = `${names[0]} ${names[1]}`;
    }
    return name;
  }


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
    return rating ? this.professors.filter(p => p.rating >= rating) : this.professors;
  }

  findProfessor(professorName: string) {
    return this.professors.find(p => p.name.includes(professorName));
  }

  getRatingFor(professorName: string, faculty: string, page: string) {
    if (this.findProfessor(professorName) !== undefined) {
      return;
    }
    professorName = MarkMyProfessorComponent.stripName(professorName);
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
