import {Component, OnInit} from '@angular/core';
import {Day} from '../../models/Day';
import {IFreeTime} from '../../models/IFreeTime';

@Component({
  selector: 'app-free-time-table',
  templateUrl: './free-time-table.component.html',
  styleUrls: ['./free-time-table.component.css'],
})
export class FreeTimeTableComponent implements OnInit {

  freeTimes: IFreeTime[];

  constructor() {
    this.freeTimes = [];
  }

  ngOnInit() {
  }

  deleteFreeTime(freeTime: IFreeTime) {
    const index = this.freeTimes.indexOf(freeTime);
    this.freeTimes.splice(index, 1);
    // call to service
  }
}
