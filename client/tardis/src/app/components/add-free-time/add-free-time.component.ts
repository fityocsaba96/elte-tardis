import {Component, OnInit} from '@angular/core';
import {IPopup} from 'ng2-semantic-ui';

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
}

interface IDayOption {
  day: Day;
  name: string;
}

@Component({
  selector: 'app-add-free-time',
  templateUrl: './add-free-time.component.html',
  styleUrls: ['./add-free-time.component.css'],
})
export class AddFreeTimeComponent implements OnInit {

  private dayOptions: IDayOption[] = [
    { day: Day.Monday, name: 'hétfő' },
    { day: Day.Tuesday, name: 'kedd' },
    { day: Day.Wednesday, name: 'szerda' },
    { day: Day.Thursday, name: 'csütörtök' },
    { day: Day.Friday, name: 'péntek' },
  ];

  private name: string;
  private selectedDay: Day;
  private startDate: Date;
  private endDate: Date;

  constructor() { }

  ngOnInit() {
  }

  /*private dateToTimeString(date: Date) { // TODO: move to service
    return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  }*/

  private addFreeTime(popup: IPopup) {
    if (!this.name || this.name.length === 0 || !this.selectedDay || !this.startDate || !this.endDate) {
      popup.open();
    } else {
      popup.close();
      // call to service
    }
  }
}
