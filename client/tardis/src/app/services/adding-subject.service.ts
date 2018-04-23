import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Http, RequestOptions, Headers } from "@angular/http";

@Injectable()
export class AddingSubjectService {

    constructor(private http: HttpClient) { }

    semester =  '2017-2018-2';
    public getData(search: string) {
        return this.http.get('/ttk-to.php',
        {
          responseType: 'text',
          params: new HttpParams()
          .append('semester',this.semester)
          .append('subject',search)
        });
      }
}