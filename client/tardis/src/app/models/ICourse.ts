import {IProfessor} from './IProfessor';
import {ITime} from './ITime';

export interface ICourse {
  groupId: number;
  time: ITime;
  room: string;
  professor: IProfessor;
}
