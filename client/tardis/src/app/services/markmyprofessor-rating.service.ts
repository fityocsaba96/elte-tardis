import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IProfessor} from '../models/IProfessor';
import {FacultyService} from './faculty.service';

@Injectable()
export class MarkmyprofessorRatingService {

  private professors: IProfessor[];
  private minimumRating: number;
  private originalName: string;
  private hasNextPage: boolean;
  private nextPage: number;
  private parser: DOMParser;

  constructor(private http: HttpClient,
              private facultyService: FacultyService) {
    this.professors = [];
    this.parser = new DOMParser();
    this.minimumRating = 0;
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

  setMinimumRating(rating: number) {
    this.minimumRating = rating;
  }

  filterProfessors(): IProfessor[] {
    const faculty = this.facultyService.getSelectedFaculty();
    return this.professors.filter((p) => p.faculty === faculty && p.rating >= this.minimumRating);
  }

  exists(professorName: string): boolean {
    return this.professors.findIndex((p) => p.name.includes(professorName)) > -1;
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

  private sendRequest(professorName: string, faculty: string) {
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

  private getData(searchName: string, page: string): Observable<string> {
    return this.http.get('/mark-my-professor.php/',
      {
        responseType: 'text',
        params: new HttpParams()
          .append('name', searchName)
          .append('page', page),
      });
  }

  private parseHtml(html: string, faculty: string) {
    const document = this.parser.parseFromString(html, 'text/html');
    const table = document.querySelector('tbody');
    if (!table) {
      return;
    }
    const rows = Array.from(table.querySelectorAll('tr'));
    rows.forEach((row) => {
      const school = row.cells[5].innerText.trim();
      const rating = Number(row.cells[4].innerText.trim());
      if (school === faculty && Number.isFinite(rating) && rating > 0.0) {
        this.professors.push({
          name: this.originalName,
          rating,
          faculty,
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

}
