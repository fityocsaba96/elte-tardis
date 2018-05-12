import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import { CourseType } from '../models/CourseType';
import { Day } from '../models/Day';
import { ICourse } from '../models/ICourse';
import { IProfessor } from '../models/IProfessor';
import { ISubject } from '../models/ISubject';
import { ITime } from '../models/ITime';
import { MarkmyprofessorRatingService } from './markmyprofessor-rating.service';

@Injectable()
export class SubjectService {

  searchSubjects: ISubject[];
  addSubjects: ISubject[];
  parser: DOMParser;
  courses: ICourse[];
  professor: IProfessor;
  semester: string;
  constructor(private http: HttpClient) {
    this.parser = new DOMParser();
    this.addSubjects = [];
    this.searchSubjects = [];
    this.courses = [];
    this.setSemester();
  }

  setSemester() {
    const date = new Date();
    if (date.getMonth() > 4) {
      this.semester = (date.getFullYear() + '-' + (date.getFullYear() + 1) + '-' + '1');
    } else {
      this.semester = ((date.getFullYear() - 1) + '-' + date.getFullYear() + '-' + '2');
    }
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
    try {
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
    } catch (Exception) {
      this.searchSubjects = [];
      this.courses = [];
      this.addSubjects = [];
      throw new Error();
    }
  }
  getCourseType(type: string): CourseType {
    if (type === 'gyakorlat') {
      return CourseType.Practice;
    } else {
      return CourseType.Lecture;
    }
  }

  getCourses(group: string, time: string, place: string, professor: string): ICourse {
    return ({
      groupId: Number(group),
      time: this.getTime(time),
      room: place,
      professor: this.professor = {
        name: professor,
      },
    });
  }

  getTime(time: string): ITime {
    const text = time.split(' ');
    const times = text[1].split('-');
    return ({
      day: this.getDay(text[0]),
      startTime: times[0],
      endTime: times[1],
    });
  }

  getDay(day: string): Day {
    switch (day.trim()) {
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
