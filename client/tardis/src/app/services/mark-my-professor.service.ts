import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class MarkMyProfessorService {

  constructor(private http: HttpClient) {
  }

  getData(searchName: string, page: string) {
    return this.http.get('/mark-my-professor.php/',
      {
        responseType: 'text',
        params: new HttpParams()
          .append('name', searchName)
          .append('page', page)
      });
  }

}
