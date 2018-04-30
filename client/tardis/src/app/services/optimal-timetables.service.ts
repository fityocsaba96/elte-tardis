import {Injectable} from '@angular/core';
import {ICourse} from '../models/ICourse';
import {ISubject} from '../models/ISubject';
import {ITime} from '../models/ITime';
import {ITimetable} from '../models/ITimetable';
import {ITimetableCourse} from '../models/ITimetableCourse';
import {FreeTimeService} from './free-time.service';
import {MarkmyprofessorRatingService} from './markmyprofessor-rating.service';
import {SubjectService} from './subject.service';
import {TimeService} from './time.service';

@Injectable()
export class OptimalTimetablesService {

  private _optimalTimetables: ITimetable[];

  constructor(private markmyprofessorRatingService: MarkmyprofessorRatingService,
              private subjectService: SubjectService,
              private freeTimeService: FreeTimeService) {
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
        if (!this.markmyprofessorRatingService.apply
        || (await this.markmyprofessorRatingService.meetsCondition(course.professor.name)) === true) { // TODO: C és D feltétel ellenőrzése
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
    // TODO: E feltétellal kapcsolatos elágazás
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
