import {Component, OnInit} from '@angular/core';
import {Day} from '../../models/Day';
import {IFreeTime} from '../../models/IFreeTime';
import {FreeTimeService} from '../../services/free-time.service';
import {NotifierService} from '../../services/notifier.service';

@Component({
  selector: 'app-free-time-table',
  templateUrl: './free-time-table.component.html',
  styleUrls: ['./free-time-table.component.css'],
})
export class FreeTimeTableComponent implements OnInit {

  freeTimes: IFreeTime[];

  constructor(private freeTimeService: FreeTimeService,
              private notifierService: NotifierService) {
    this.freeTimes = [];
  }

  ngOnInit() {
    this.notifierService.freeTimeAdded.subscribe((freeTime) => {
      this.freeTimes.push(freeTime);
    });
  }

  delete(freeTime: IFreeTime) {
    const index = this.freeTimes.indexOf(freeTime);
    this.freeTimeService.delete(index);
    this.freeTimes.splice(index, 1);
  }
}
