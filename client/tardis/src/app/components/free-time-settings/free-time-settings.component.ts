import {Component, OnInit} from '@angular/core';
import {FreeTimeService} from '../../services/free-time.service';

@Component({
  selector: 'app-free-time-settings',
  templateUrl: './free-time-settings.component.html',
  styleUrls: ['./free-time-settings.component.css'],
})
export class FreeTimeSettingsComponent implements OnInit {

  isChecked: boolean;

  constructor(private freeTimeService: FreeTimeService) { }

  ngOnInit() {
  }

  changeChecked() {
    this.freeTimeService.toggleApply();
  }
}
