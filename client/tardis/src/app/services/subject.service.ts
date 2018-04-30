import { Injectable } from '@angular/core';
import { ISubjects } from '../models/ISubjects';

@Injectable()
export class SubjectService {

  private _subjects: ISubjects;

  constructor() {
    /*this._subjects = {
      notConflicted:
    };*/
    // fill _subjects with fake data
  }

  public get subjects(): ISubjects {
    return this._subjects;
  }
}
