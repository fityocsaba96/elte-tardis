import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Professor} from '../models/professor';

@Injectable()
export class MarkMyProfessorService {
  corsProxy = 'http://localhost:1337/';
  mmpUrl = 'www.markmyprofessor.com';
  queryUrl = this.corsProxy + this.mmpUrl + '/kereses.html?ajax';

  constructor(private http: HttpClient) {
  }

  getData(searchName: string, page: string) {
    return this.http.get(this.queryUrl,
      {
        responseType: 'text',
        params: new HttpParams()
          .append('type', 'professors')
          .append('word', searchName)
          .append('order', 'school') // order=school query parameterrel nagyobb az esély, hogy az ELTE-sek az első oldalra kerüljenek
          .append('p', page)
      });
  }

  parseHtml(html: string) {
    const professors: Professor[] = [];
    const parser = new DOMParser();
    const document = parser.parseFromString(html, 'text/html');
    const table = document.querySelector('tbody');
    const rows = Array.from(table.querySelectorAll('tr'));
    rows.forEach(row => {
      const school = row.cells[5].innerText.trim();
      if (school.startsWith('ELTE')) {
        const nameCell = row.querySelector('a');
        professors.push({
          name: nameCell.innerText.trim(),
          link: 'http://' + this.mmpUrl + nameCell.pathname,
          rating: Number(row.cells[4].innerText.trim()),
          school: school,
        });
      }
    });
    return professors;
  }
}
