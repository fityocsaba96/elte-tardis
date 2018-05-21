import {Injectable} from '@angular/core';
import {ITime} from '../models/ITime';
import {TimeService} from './time.service';

@Injectable()
export class LatestEndService {

  private _latestEnd: string;
  private _apply: boolean;

  constructor() {
    this._apply = false;
  }

  public set latestEnd(latestEnd: Date) {
    this._latestEnd = TimeService.dateToTimeString(latestEnd);
  }

  public toggleApply(): void {
    this._apply = !this._apply;
  }

  public get apply(): boolean {
    return this._apply;
  }

  public meetsCondition(time: ITime): boolean {
    return this._latestEnd === undefined || !(time.endTime > this._latestEnd);
  }
}
