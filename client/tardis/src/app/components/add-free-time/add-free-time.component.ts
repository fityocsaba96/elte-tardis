import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {IPopup} from 'ng2-semantic-ui';
import {Day} from '../../models/Day';
import {IFreeTime} from '../../models/IFreeTime';
import {FreeTimeService} from '../../services/free-time.service';
import {NotifierService} from '../../services/notifier.service';

@Component({
  selector: 'app-add-free-time',
  templateUrl: './add-free-time.component.html',
  styleUrls: ['./add-free-time.component.css'],
})
export class AddFreeTimeComponent implements OnInit {

  dayOptions: Day[] = [Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday];

  name: string;
  day: Day;
  startDate: Date;
  endDate: Date;

  @ViewChild('addFreeTimeForm')
  private addFreeTimeForm: NgForm;

  constructor(private freeTimeService: FreeTimeService,
              private notifierService: NotifierService) { }

  ngOnInit() {
  }

  add(popup: IPopup) {
    if (!this.freeTimeService.isValid(this.name, this.day, this.startDate, this.endDate)) {
      popup.open();
    } else {
      popup.close();
      const freeTime: IFreeTime = this.freeTimeService.add(this.name, this.day, this.startDate, this.endDate);
      this.addFreeTimeForm.resetForm();
      this.notifierService.notifyFreeTimeAdded(freeTime);
    }
  }
}
