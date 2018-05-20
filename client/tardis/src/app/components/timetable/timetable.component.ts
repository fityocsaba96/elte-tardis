import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ITimetable } from '../../models/ITimetable';

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
    this.days = ['Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek'];
    this.intervals = [];
    for (let i = 8; i < 22; ++i) {
      const str = String(i);
      this.intervals.push(str.length === 1 ? '0' + str : str);
    }
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['timetable']) {
      this.timetable = changes['timetable'].currentValue;
      console.log(this.timetable);
    }
  }

}
