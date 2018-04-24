import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {IProfessor} from '../models/IProfessor';
import {FacultyService} from './faculty.service';

@Injectable()
export class MarkmyprofessorRatingService {

  private originalName: string;
  private professors: IProfessor[];
  private hasNextPage: boolean;
  private nextPage: number;

  constructor(private http: HttpClient,
              private facultyService: FacultyService) {
    this.professors = [];
  }

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
    } else if (names.length > 3) {
      name = `${names[1]} ${names[2]}`;
    } else {
      name = `${names[0]} ${names[1]}`;
    }
    return name;
  }

  getData(searchName: string, page: string) {
    return this.http.get('/mark-my-professor.php/',
      {
        responseType: 'text',
        params: new HttpParams()
          .append('name', searchName)
          .append('page', page),
      });
  }

  getRatingFor(professorName: string) {
    if (this.exists(professorName)) {
      return;
    }
    this.originalName = professorName;
    const searchName = MarkmyprofessorRatingService.stripName(professorName);
    this.hasNextPage = true;
    this.nextPage = 0;
    this.sendRequest(searchName, this.facultyService.getSelectedFaculty());
  }

  sendRequest(professorName: string, faculty: string) {
    ++this.nextPage;
    this.getData(professorName, String(this.nextPage))
      .subscribe((page) => {
        this.parseHtml(page, faculty);
        if (this.hasNextPage) {
          this.sendRequest(professorName, faculty);
        }
      }, (err) => {
        console.log(err);
      });
  }

  parseHtml(html: string, faculty: string) {
    const parser = new DOMParser();
    const document = parser.parseFromString(html, 'text/html');
    const table = document.querySelector('tbody');
    if (table == null) {
      return;
    }
    const rows = Array.from(table.querySelectorAll('tr'));
    rows.forEach((row) => {
      const school = row.cells[5].innerText.trim();
      const rating = Number(row.cells[4].innerText.trim());
      if (school === faculty && Number.isFinite(rating) && rating > 0.0) {
        this.addProfessor({
          name: this.originalName,
          rating,
          school,
        });
        this.hasNextPage = false;
        return;
      }
    });
    const pager = document.querySelector('div[class=pager]');
    if (pager != null) {
      const pages = Array.from(pager.querySelectorAll('a'));
      const pageNumber = parseInt(pages[pages.length - 1].innerText, 10);
      this.hasNextPage = isNaN(pageNumber);
    } else {
      this.hasNextPage = false;
    }
  }

  addProfessor(professor: IProfessor) {
    this.professors.push(professor);
  }

  findProfessorAboveRating(professorName: string, rating: number): IProfessor {
    const faculty = this.facultyService.getSelectedFaculty();
    return this.professors.find((p) => p.school.includes(faculty) && p.name === professorName && p.rating >= rating);
  }

  filterProfessors(rating?: number): IProfessor[] {
    const faculty = this.facultyService.getSelectedFaculty();
    return this.professors.filter((p) => p.school.includes(faculty) && p.rating >= rating);
  }

  exists(professorName: string): boolean {
    return this.professors.findIndex((p) => p.name.includes(professorName)) > -1;
  }

}
