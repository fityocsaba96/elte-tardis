import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-free-time-settings',
  templateUrl: './free-time-settings.component.html',
  styleUrls: ['./free-time-settings.component.css'],
})
export class FreeTimeSettingsComponent implements OnInit {

  isChecked: boolean;

  constructor() { }

  ngOnInit() {
  }

  changeChecked() {
    // call to service
  }
}
