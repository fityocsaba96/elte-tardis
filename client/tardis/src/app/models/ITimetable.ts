import {IFreeTime} from './IFreeTime';
import {ITimetableCourse} from './ITimetableCourse';

export interface ITimetable {
  freeTime?: IFreeTime[];
  notConflicted?: ITimetableCourse[];
  conflicted?: ITimetableCourse[];
}
