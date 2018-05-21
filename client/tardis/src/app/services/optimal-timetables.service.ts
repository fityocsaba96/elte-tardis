import {Injectable} from '@angular/core';
import {ICourse} from '../models/ICourse';
import {IFreeTime} from '../models/IFreeTime';
import {ISubject} from '../models/ISubject';
import {ITime} from '../models/ITime';
import {ITimetable} from '../models/ITimetable';
import {ITimetableCourse} from '../models/ITimetableCourse';
import {EarliestStartService} from './earliest-start.service';
import {FreeTimeService} from './free-time.service';
import {LatestEndService} from './latest-end.service';
import {LongestBreakService} from './longest-break.service';
import {MarkmyprofessorRatingService} from './markmyprofessor-rating.service';
import {SubjectService} from './subject.service';
import {TimeService} from './time.service';

@Injectable()
export class OptimalTimetablesService {

  private _optimalTimetables: ITimetable[];

  constructor(private markmyprofessorRatingService: MarkmyprofessorRatingService,
              private subjectService: SubjectService,
              private freeTimeService: FreeTimeService,
              private earliestStartService: EarliestStartService,
              private latestEndService: LatestEndService,
              private longestBreakService: LongestBreakService) {
    this._optimalTimetables = [];
  }

  public get optimalTimetables(): ITimetable[] {
    return this._optimalTimetables;
  }

  // tslint:disable-next-line:cognitive-complexity
  public async generateOptimalTimetables(): Promise<ITimetable[]> {
    let timetables: ITimetable[] = [
      {
        freeTime: this.freeTimeService.apply ? this.freeTimeService.freeTimes : [],
        notConflicted: [],
        conflicted: [],
      },
    ];

    for (const subject of this.subjectService.subjects.notConflicted) {
      const newTimetables: ITimetable[] = [];
      for (const course of subject.courses) {

        const markmyprofessorConditionOk = !this.markmyprofessorRatingService.apply
          || (await this.markmyprofessorRatingService.meetsCondition(course.professor.name));
        const earliestStartConditionOk = !this.earliestStartService.apply
          || this.earliestStartService.meetsCondition(course.time);
        const latestEndConditionOk = !this.latestEndService.apply
          || this.latestEndService.meetsCondition(course.time);

        if (markmyprofessorConditionOk && earliestStartConditionOk && latestEndConditionOk) {
          if (this.markmyprofessorRatingService.apply) {
            course.professor.rating = this.markmyprofessorRatingService.filterProfessors()
              .find((professor) => professor.name === course.professor.name).rating;
          }

          for (const timetable of timetables) {
            if (timetable.notConflicted.every((timetableCourse) =>
                  !TimeService.conflicts(timetableCourse.time, course.time))
             && timetable.freeTime.every((timetableCourse) =>
                  !TimeService.conflicts(timetableCourse.time, course.time))) {
              const newTimetable: ITimetable = JSON.parse(JSON.stringify(timetable));
              newTimetable.notConflicted.push(this.courseToTimetableCourse(course, subject));
              newTimetables.push(newTimetable);
            }
          }
        }
      }
      timetables = newTimetables;
    }

    if (this.longestBreakService.apply) {
      const newTimetables: ITimetable[] = [];
      for (const timetable of timetables) {
        const datesOfFreeTime = timetable.freeTime.map((freeTime: IFreeTime) => freeTime.time);
        const datesOfNotConflicted = timetable.notConflicted.map((course: ITimetableCourse) => course.time);
        const allDates = datesOfFreeTime.concat(datesOfNotConflicted);
        let allPairsConditionOk = true;
        allDates.sort((timeA: ITime, timeB: ITime) => {
          if (timeA.day === timeB.day) {
            return timeA.startTime < timeB.startTime ? -1 : 1;
          } else {
            return timeA.day < timeB.day ? -1 : 1;
          }
        });
        for (let i = 0; i < allDates.length - 1; i++) {
          if (!this.longestBreakService.meetsCondition(allDates[i], allDates[i + 1])) {
            allPairsConditionOk = false;
            break;
          }
        }
        if (allPairsConditionOk) {
          newTimetables.push(timetable);
        }
      }
      timetables = newTimetables;
    }

    for (const subject of this.subjectService.subjects.conflicted) {
      const newTimetables: ITimetable[] = [];
      for (const course of subject.courses) {
        for (const timetable of timetables) {
          if (timetable.notConflicted.some((timetableCourse) =>
                TimeService.conflicts(timetableCourse.time, course.time))) {
            const newTimetable: ITimetable = JSON.parse(JSON.stringify(timetable));
            newTimetable.conflicted.push(this.courseToTimetableCourse(course, subject));
            newTimetables.push(newTimetable);
          }
        }
      }
      timetables = newTimetables;
    }

    this._optimalTimetables = timetables;
    return this._optimalTimetables;
  }

  private courseToTimetableCourse(course: ICourse, subject: ISubject): ITimetableCourse {
    return {
      name: subject.name,
      groupId: course.groupId,
      courseType: subject.courseType,
      time: course.time,
      room: course.room,
      professor: course.professor,
    };
  }
}
