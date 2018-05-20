import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Day } from '../../models/Day';
import { IFreeTime } from '../../models/IFreeTime';
import { ITimetable } from '../../models/ITimetable';
import { ITimetableCourse } from '../../models/ITimetableCourse';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css'],
})
export class TimetableComponent implements OnInit, OnChanges {

  days: string[];
  intervals: string[];
  @Input() timetable: ITimetable;

  constructor() {
  }

  ngOnInit() {
    this.timetable = {};
    this.days = [Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday];
    this.intervals = [];
    for (let i = 8; i < 22; ++i) {
      const str = String(i) + ':00';
      this.intervals.push(str.length === 4 ? '0' + str : str);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['timetable']) {
      this.timetable = changes['timetable'].currentValue;
      console.log(this.timetable);
      if (this.timetable) {
        this.refreshTable();
      }
    }
  }

  refreshTable() {
    if (this.timetable.notConflicted) {
      this.displayNotConflicted(this.timetable.notConflicted);
    }
    if (this.timetable.freeTime) {
      this.displayFreeTime(this.timetable.freeTime);
    }
    if (this.timetable.conflicted) {
      this.displayConflicted(this.timetable.conflicted);
    }
  }

  displayNotConflicted(notConflictedList: ITimetableCourse[]) {

  }

  displayFreeTime(freeTimeList: IFreeTime[]) {

  }

  displayConflicted(conflictedList: ITimetableCourse[]) {

  }

}
