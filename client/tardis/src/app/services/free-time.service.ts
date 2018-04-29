import {Injectable} from '@angular/core';
import {Day} from '../models/Day';
import {IFreeTime} from '../models/IFreeTime';
import {ITimetableCourse} from '../models/ITimetableCourse';
import {OptimalTimetablesService} from './optimal-timetables.service';

@Injectable()
export class FreeTimeService {

  private _freeTimes: IFreeTime[];
  private _apply: boolean;

  constructor() {
    this._freeTimes = [];
    this._apply = false;
  }

  private static dateToTimeString(date: Date): string {
    return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  }

  private static parse(name: string, day: Day, startDate: Date, endDate: Date): IFreeTime {
    return {
      name,
      time: {
        day,
        startTime: FreeTimeService.dateToTimeString(startDate),
        endTime: FreeTimeService.dateToTimeString(endDate),
      },
    };
  }

  public isValid(name: string, day: Day, startDate: Date, endDate: Date): boolean {
    if (name && name.length !== 0 && day && startDate && endDate && startDate < endDate) {
      const currentFreeTime: IFreeTime = FreeTimeService.parse(name, day, startDate, endDate);
      return this._freeTimes.every((freeTime: IFreeTime) => !OptimalTimetablesService.conflicts(currentFreeTime.time, freeTime.time));
    }
    return false;
  }

  public add(name: string, day: Day, startDate: Date, endDate: Date): IFreeTime {
    const freeTime: IFreeTime = FreeTimeService.parse(name, day, startDate, endDate);
    this._freeTimes.push(freeTime);
    return freeTime;
  }

  public delete(index: number): void {
    this._freeTimes.splice(index, 1);
  }

  public toggleApply(): void {
    this._apply = !this._apply;
  }

  public get freeTimes(): IFreeTime[] {
    return this._freeTimes;
  }

  public get apply(): boolean {
    return this._apply;
  }
}
