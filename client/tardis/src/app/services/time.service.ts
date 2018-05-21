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

  public static addHours(time: string, hoursToAdd: number): string {
    const pieces = time.split(':');
    let hours: any = Number(pieces[0]) + hoursToAdd;
    hours = hours < 10 ? `0${String(hours)}` : String(hours);
    return `${hours}:${pieces[1]}`;
  }
}
