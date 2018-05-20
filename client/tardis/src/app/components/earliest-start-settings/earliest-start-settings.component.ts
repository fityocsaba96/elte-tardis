import {Component, OnInit} from '@angular/core';
import {EarliestStartService} from '../../services/earliest-start.service';

@Component({
  selector: 'app-earliest-start-settings',
  templateUrl: './earliest-start-settings.component.html',
  styleUrls: ['./earliest-start-settings.component.css'],
})
export class EarliestStartSettingsComponent implements OnInit {

  isChecked: boolean;

  constructor(private earliestStartService: EarliestStartService) { }

  ngOnInit() {
  }

  changeChecked() {
    this.earliestStartService.toggleApply();
  }

  updateEarliestStart(date: Date) {
    if (date) {
      this.earliestStartService.earliestStart = date;
    }
  }
}
