import {Injectable} from '@angular/core';
import {CourseType} from '../models/CourseType';
import {Day} from '../models/Day';
import {ISubjects} from '../models/ISubjects';

@Injectable()
export class SubjectService {

  private _subjects: ISubjects;

  constructor() {
    this._subjects = { // test data
      notConflicted: [
        {
          name: 'Analízis 1.',
          courseType: CourseType.Lecture,
          code: 'IP-08cAN1E',
          courses: [
            {
              groupId: 1,
              time: {
                day: Day.Monday,
                startTime: '12:00',
                endTime: '14:00',
              },
              room: 'D 0-821',
              professor: {
                name: 'Szili László',
              },
            },
            {
              groupId: 2,
              time: {
                day: Day.Thursday,
                startTime: '08:00',
                endTime: '10:00',
              },
              room: 'D 0-821',
              professor: {
                name: 'Szili László',
              },
            },
          ],
        },
        {
          name: 'Analízis 1.',
          courseType: CourseType.Practice,
          code: 'IP-08bAN1G',
          courses: [
            {
              groupId: 1,
              time: {
                day: Day.Monday,
                startTime: '10:00',
                endTime: '12:00',
              },
              room: 'D 0-312',
              professor: {
                name: 'Lócsi Levente',
              },
            },
            {
              groupId: 2,
              time: {
                day: Day.Monday,
                startTime: '10:00',
                endTime: '12:00',
              },
              room: 'D 00-718',
              professor: {
                name: 'Csörgõ István',
              },
            },
            {
              groupId: 3,
              time: {
                day: Day.Wednesday,
                startTime: '10:00',
                endTime: '12:00',
              },
              room: 'D 00-718',
              professor: {
                name: 'Chripkó Ágnes',
              },
            },
          ],
        },
        {
          name: 'Eseményvezérelt alkalmazások fejlesztése 1',
          courseType: CourseType.Practice,
          code: 'IP-08bEVALK1EG',
          courses: [
            {
              groupId: 1,
              time: {
                day: Day.Monday,
                startTime: '14:00',
                endTime: '15:00',
              },
              room: 'D 00-803',
              professor: {
                name: 'Németh Dávid',
              },
            },
            {
              groupId: 2,
              time: {
                day: Day.Monday,
                startTime: '14:00',
                endTime: '15:00',
              },
              room: 'D 00-410',
              professor: {
                name: 'Milacski Zoltán',
              },
            },
          ],
        },
      ],
      conflicted: [
        {
          name: 'Eseményvezérelt alkalmazások fejlesztése 1',
          courseType: CourseType.Lecture,
          code: 'IP-08bEVALK1EG',
          courses: [
            {
              groupId: 90,
              time: {
                day: Day.Monday,
                startTime: '12:00',
                endTime: '13:00',
              },
              room: 'D 0-822',
              professor: {
                name: 'Gregorics Tibor',
              },
            },
          ],
        },
      ],
    };
  }

  public get subjects(): ISubjects {
    return this._subjects;
  }
}
