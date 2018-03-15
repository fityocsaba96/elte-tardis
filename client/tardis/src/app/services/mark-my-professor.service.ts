import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Professor} from '../models/professor';

@Injectable()
export class MarkMyProfessorService {
  corsProxy = 'http://localhost:1337/';
  mmpUrl = this.corsProxy + 'www.markmyprofessor.com/kereses.html?ajax';

  constructor(private http: HttpClient) {
  }

  getData(searchName: string) {
    return this.http.get(this.mmpUrl,
      {
        responseType: 'text',
        params: new HttpParams()
          .append('type', 'professors')
          .append('word', searchName)
          .append('order', 'school') // order=school query parameterrel nagyobb az esély, hogy az ELTE-sek az első oldalra kerüljenek
      });
  }

  parseHtml(html: string) {
    const professors: Professor[] = [];
    // tabok, új sorok kitakarítása
    html = html.replace(/\r\n|\r|\n|\t/g, '');
    // spliteléssel megvannak a tábla sorai, elsőből és utolsóból még takarítani kell a felesleget
    const tbody = html.split('<tr class=\"values\">');
    tbody.splice(0, 1);
    tbody[tbody.length - 1] = tbody[tbody.length - 1].split('</tbody>')[0];
    // végigiterálunk a sorokon
    tbody.forEach(e => {
      const professor: Professor = {};
      // sor felbontása oszlopokra
      const tds = e.split('</td>');
      // a megfelelő oszlopból kivesszük az iskola rövidítését pl. ELTE-IK
      professor.school = tds[5].replace('<td align=\"right\">', '').split('>')[1];
      // még a végéről takarítunk
      professor.school = professor.school.substring(0, professor.school.length - 3).trim();

      // ha ELTE-s akkor belekerül
      if (professor.school.startsWith('ELTE')) {
        // a megfelelő oszlopból kivesszük csak a nevet, végekről takarítás
        professor.name = tds[2].replace('<td align=\"left\" valign=\"middle\">', '').split('>')[1];
        professor.name = professor.name.substring(0, professor.name.length - 3).trim();
        // a megfelelő oszlopból kivesszük az értékelést és számmá alakítjuk
        professor.rating = Number(tds[4].replace('<td align="center"><strong>', '').replace('</strong>', ''));
        professors.push(professor);
      }
    });
    console.log(professors);
    return professors;
  }
}
