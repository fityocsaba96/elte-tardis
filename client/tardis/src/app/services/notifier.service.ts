import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {IFreeTime} from '../models/IFreeTime';

@Injectable()
export class NotifierService {

  private _freeTimeAdded: Subject<IFreeTime>;

  constructor() {
    this._freeTimeAdded = new Subject<IFreeTime>();
  }

  public get freeTimeAdded(): Subject<IFreeTime> {
    return this._freeTimeAdded;
  }

  public notifyFreeTimeAdded(freeTime: IFreeTime): void  {
    this._freeTimeAdded.next(freeTime);
  }
}
