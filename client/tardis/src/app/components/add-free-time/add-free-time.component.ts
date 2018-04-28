import {Component, OnInit} from '@angular/core';
import {IPopup} from 'ng2-semantic-ui';
import {Day} from '../../models/Day';

@Component({
  selector: 'app-add-free-time',
  templateUrl: './add-free-time.component.html',
  styleUrls: ['./add-free-time.component.css'],
})
export class AddFreeTimeComponent implements OnInit {

  dayOptions: Day[] = [Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday];

  name: string;
  selectedDay: Day;
  startDate: Date;
  endDate: Date;

  constructor() { }

  ngOnInit() {
  }

  /*dateToTimeString(date: Date) { // TODO: move to service
    return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  }*/

  addFreeTime(popup: IPopup) {
    if (!this.name || this.name.length === 0 || !this.selectedDay || !this.startDate || !this.endDate) {
      popup.open();
    } else {
      popup.close();
      // call to service
    }
  }
}
