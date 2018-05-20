import {Component, OnInit} from '@angular/core';
import {LatestEndService} from '../../services/latest-end.service';

@Component({
  selector: 'app-latest-end-settings',
  templateUrl: './latest-end-settings.component.html',
  styleUrls: ['./latest-end-settings.component.css'],
})
export class LatestEndSettingsComponent implements OnInit {

  isChecked: boolean;

  constructor(private latestEndService: LatestEndService) { }

  ngOnInit() {
  }

  changeChecked() {
    this.latestEndService.toggleApply();
  }

  updateLatestEnd(date: Date) {
    if (date) {
      this.latestEndService.latestEnd = date;
    }
  }
}
