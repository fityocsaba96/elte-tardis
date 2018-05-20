import {Injectable} from '@angular/core';
import {ITime} from '../models/ITime';
import {TimeService} from './time.service';

@Injectable()
export class LongestBreakService {

  private _longestBreak: number;
  private _apply: boolean;

  constructor() {
    this._apply = false;
  }

  public set longestBreak(longestBreak: number) {
    this._longestBreak = longestBreak;
  }

  public toggleApply(): void {
    this._apply = !this._apply;
  }

  public get apply(): boolean {
    return this._apply;
  }

  public meetsCondition(timeA: ITime, timeB: ITime): boolean {
    return !this._longestBreak
      || (timeA.day !== timeB.day
      || (!(TimeService.addHours(timeA.endTime, this._longestBreak) < timeB.startTime)
      && !(TimeService.addHours(timeA.startTime, -this._longestBreak) > timeB.endTime)));
  }
}
