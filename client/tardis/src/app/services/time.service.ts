import {Injectable} from '@angular/core';
import {ITime} from '../models/ITime';

@Injectable()
export class TimeService {

  constructor() { }

  public static conflicts(timeA: ITime, timeB: ITime): boolean {
    return timeA.day === timeB.day
       && (timeA.startTime === timeB.startTime || timeA.endTime === timeB.endTime
       || (timeA.endTime > timeB.startTime && timeA.startTime < timeB.endTime));
  }

  public static dateToTimeString(date: Date): string {
    return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  }
}
