import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {IFreeTime} from '../models/IFreeTime';
import {IProfessor} from '../models/IProfessor';

@Injectable()
export class NotifierService {

  private _freeTimeAdded: Subject<IFreeTime>;
  private _markmyprofessorRatingFound: Subject<boolean>;

  constructor() {
    this._freeTimeAdded = new Subject<IFreeTime>();
    this._markmyprofessorRatingFound = new Subject<boolean>();
  }

  public get freeTimeAdded(): Subject<IFreeTime> {
    return this._freeTimeAdded;
  }

  public notifyFreeTimeAdded(freeTime: IFreeTime): void  {
    this._freeTimeAdded.next(freeTime);
  }

  public get markmyprofessorRatingFound(): Subject<boolean> {
    return this._markmyprofessorRatingFound;
  }

  public notifyMarkmyprofessorRatingFound(meetsCondition: boolean): void  {
    this._markmyprofessorRatingFound.next(meetsCondition);
  }
}
