import { CourseType } from './CourseType';
import { IProfessor } from './IProfessor';
import { ITime } from './ITime';

export interface ITimetableCourse {
  subjectName: string;
  groupId: number;
  courseType: CourseType;
  time: ITime;
  room: string;
  professor: IProfessor;
}
