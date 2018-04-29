import {CourseType} from './CourseType';
import {ICourse} from './ICourse';

export interface ISubject {
  name: string;
  courseType: CourseType;
  code: string;
  courses: ICourse[];
}
