import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { ISubject } from '../models/ISubject';
import { CourseType } from '../models/CourseType';
import { ICourse } from '../models/ICourse';
import { IProfessor } from '../models/IProfessor';
import { ITime } from '../models/ITime';
import { Day } from '../models/Day';
import { MarkmyprofessorRatingService } from './markmyprofessor-rating.service';
import { FacultyService } from './faculty.service';

@Injectable()
export class SubjectService {

  searchSubjects: ISubject[];
  addSubjects: ISubject[];
  parser: DOMParser;
  courses: ICourse[];
  professor: IProfessor;
  facultyService: FacultyService;


  semester =  '2017-2018-2';
    constructor(private http: HttpClient) {
      this.parser = new DOMParser();
      this.addSubjects = [];
      this.searchSubjects = [];
      this.courses = [];
    }

    getData(search: string) {
        return this.http.get('/ttk-to.php',
        {
          responseType: 'text',
          params: new HttpParams()
          .append('semester', this.semester)
          .append('subject', search),
        });
      }

      parseHtml(html: string) {
        const document = this.parser.parseFromString(html, 'text/html');
        const table = document.querySelector('tbody');
        if (table == null) {
          return;
        }
        const rows = Array.from(table.querySelectorAll('tr'));
        rows.forEach((row) => {
          if (row.cells[0].innerText.trim() !== 'Kurzusnev' && row.cells[2].innerText.trim() !== '') {
            this.courses.push(this.getCourses(row.cells[7].innerText.trim(),
                                              row.cells[2].innerText.trim(),
                                              row.cells[3].innerText.trim(),
                                              row.cells[11].innerText.trim()));
            this.searchSubjects.push({
              name: row.cells[0].innerText.trim(),
              courseType: this.getCourseType(row.cells[6].innerText.trim()),
              code: row.cells[1].innerText.trim(),
              courses: this.courses,
            });
          }
        });
      }

      getCourseType(type: String): CourseType {
        if(type == 'gyakorlat') {
          return CourseType.Practice;
        } else {
          return CourseType.Lecture;
        }
      }

      getCourses(group: string, time: string, room: string, professor: string): ICourse {
        return ({
          groupId: Number(group),
          time: this.getTime(time),
          room: room,
          professor: this.professor = {
            name: professor,
          },
        })
      }

      getTime(time: string): ITime {
        let text = time.split(' ');
        let times = text[1].split('-');
        return ({
          day: this.getDay(text[0]),
          startTime: times[0],
          endTime: times[1]
        })
      }

      getDay(day: string): Day {
        switch(day.trim()) {
          case 'Hétfo':
          return Day.Monday;
          case 'Kedd':
          return Day.Tuesday;
          case 'Szerda':
          return Day.Wednesday;
          case 'Csütörtök':
          return Day.Thursday;
          case 'Péntek':
          return Day.Friday;
        }
      }

     getSearchSubject(): ISubject[] {
       return this.searchSubjects;
     }

      addSubject(subject: ISubject) {
        if (this.addSubjects.indexOf(subject) === -1) {
          this.addSubjects.push(subject);
        }
      }

      getAddSubject(): ISubject[] {
        return this.addSubjects;
      }
}
