import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Http, RequestOptions, Headers } from "@angular/http";
import { Subject } from "../models/subject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class SubjectService {

  searchSubjects: Subject[];
  addSubjects: Subject[];
  parser: DOMParser;

    constructor(private http: HttpClient) {
      this.parser = new DOMParser();
      this.searchSubjects = [];
      this.addSubjects = [];
    }

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

      parseHtml(html: string) {
        const document = this.parser.parseFromString(html,'text/html');
        const table = document.querySelector('tbody');
        if (table == null) {
          return;
        }
        const rows = Array.from(table.querySelectorAll('tr'));
        rows.forEach((row) => {
          if(row.cells[0].innerText.trim() !== "Kurzusnev" && row.cells[2].innerText.trim() !== "") {
            this.searchSubjects.push({
              courseName: row.cells[0].innerText.trim(),
              courseCode: row.cells[1].innerText.trim(),
              time: row.cells[2].innerText.trim(),
              courseType: row.cells[6].innerText.trim(),
              professor: row.cells[11].innerText.trim(),
              conflict: true
            });
          } 
        });
      }

     getSearchSubject(): Subject[] {
       return this.searchSubjects;
     }

      addSubject(subject: Subject) {
        if(this.addSubjects.indexOf(subject) === -1) {
          this.addSubjects.push(subject);
        }
      }

      getAddSubject(): Subject[] {
        return this.addSubjects;
      }


      
}