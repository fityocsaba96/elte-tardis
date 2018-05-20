import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {inject, TestBed} from '@angular/core/testing';
import {CourseType} from '../models/CourseType';
import {Day} from '../models/Day';
import {ISubjects} from '../models/ISubjects';
import {ITime} from '../models/ITime';
import {EarliestStartService} from './earliest-start.service';
import {FacultyService} from './faculty.service';
import {FreeTimeService} from './free-time.service';
import {LatestEndService} from './latest-end.service';
import {LongestBreakService} from './longest-break.service';
import {MarkmyprofessorRatingService} from './markmyprofessor-rating.service';
import {NotifierService} from './notifier.service';
import {OptimalTimetablesService} from './optimal-timetables.service';
import {SubjectService} from './subject.service';

// tslint:disable-next-line:no-big-function
describe('OptimalTimetablesService', () => {
  let service: OptimalTimetablesService;
  let subjectService: SubjectService;
  let earliestStartService: EarliestStartService;
  let latestEndService: LatestEndService;
  let longestBreakService: LongestBreakService;

  const exampleSubjects: ISubjects = {
    notConflicted: [
      {
        // tslint:disable-next-line:no-duplicate-string
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [
        OptimalTimetablesService,
        MarkmyprofessorRatingService,
        FacultyService,
        FreeTimeService,
        SubjectService,
        NotifierService,
        EarliestStartService,
        LatestEndService,
        LongestBreakService,
      ],
    });
    service = TestBed.get(OptimalTimetablesService);
    subjectService = TestBed.get(SubjectService);
    earliestStartService = TestBed.get(EarliestStartService);
    latestEndService = TestBed.get(LatestEndService);
    longestBreakService = TestBed.get(LongestBreakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('generateOptimalTimetables', () => {
    it('should return timetables where all alternatives have the same group of lecture A'
      + ' where multiple groups are available if there is a lecture B with only one group'
      + ' that has to be conflicted and it conflicts with one of the groups of lecture A', (done) => {
      spyOnProperty(subjectService, 'subjects', 'get').and.returnValue(exampleSubjects);
      service.generateOptimalTimetables().then((timetables) => {
        expect(timetables.every((timetable) => {
          return timetable.notConflicted.some((course) => {
            return course.name === 'Analízis 1.' && course.courseType === CourseType.Lecture && course.groupId === 1;
          });
        })).toBeTruthy();
        done();
      });
    });

    it('should return timetables count of productum of valid choices of all subjects', (done) => {
      spyOnProperty(subjectService, 'subjects', 'get').and.returnValue(exampleSubjects);
      service.generateOptimalTimetables().then((timetables) => {
        expect(timetables.length).toBe(6);
        done();
      });
    });

    it('should return zero timetables when earliest start is set and there is a practice'
      + ' where all groups start earlier than the earliest start', (done) => {
      spyOnProperty(subjectService, 'subjects', 'get').and.returnValue(exampleSubjects);
      earliestStartService.toggleApply();
      const offset: number = (new Date()).getTimezoneOffset() * 60000;
      earliestStartService.earliestStart = new Date(1526810700000 + offset);
      service.generateOptimalTimetables().then((timetables) => {
        expect(timetables.length).toBe(0);
        done();
      });
    });

    it('should return zero timetables when latest end is set and there is a practice'
      + ' where all groups end later than the latest end', (done) => {
      spyOnProperty(subjectService, 'subjects', 'get').and.returnValue(exampleSubjects);
      latestEndService.toggleApply();
      const offset: number = (new Date()).getTimezoneOffset() * 60000;
      latestEndService.latestEnd = new Date(1526828100000 + offset);
      service.generateOptimalTimetables().then((timetables) => {
        expect(timetables.length).toBe(0);
        done();
      });
    });

    it('should return the same amount of timetables with and without the longest break condition applied'
       + ' if none of the resulting timetables has any breaks', (done) => {
      spyOnProperty(subjectService, 'subjects', 'get').and.returnValue(exampleSubjects);
      service.generateOptimalTimetables().then((timetablesWithoutCondition) => {
        longestBreakService.toggleApply();
        longestBreakService.longestBreak = 0;
        service.generateOptimalTimetables().then((timetablesWithCondition) => {
          expect(timetablesWithoutCondition.length).toBe(timetablesWithCondition.length);
          done();
        });
      });
    });
  });
});
