import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class MarkMyProfessorService {
  host = 'http://www.markmyprofessor.com/kereses.html?ajax';

  constructor(private http: HttpClient) {
  }

  getData(professor: string) {
    this.http.get(this.host,
      {
        params: new HttpParams()
          .append('type', 'professors')
          .append('word', professor)
      })
      .subscribe(result => {
          console.log(result);
        }
        , err => {
          console.log(err);
        });
  }
}
