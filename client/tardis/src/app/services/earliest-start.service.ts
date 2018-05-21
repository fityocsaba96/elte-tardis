import {Injectable} from '@angular/core';
import {ITime} from '../models/ITime';
import {TimeService} from './time.service';

@Injectable()
export class EarliestStartService {

  private _earliestStart: string;
  private _apply: boolean;

  constructor() {
    this._apply = false;
  }

  public set earliestStart(earliestStart: Date) {
    this._earliestStart = TimeService.dateToTimeString(earliestStart);
  }

  public toggleApply(): void {
    this._apply = !this._apply;
  }

  public get apply(): boolean {
    return this._apply;
  }

  public meetsCondition(time: ITime): boolean {
    return this._earliestStart === undefined || !(time.startTime < this._earliestStart);
  }
}
