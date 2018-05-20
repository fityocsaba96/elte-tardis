import {Component, OnInit} from '@angular/core';
import {LongestBreakService} from '../../services/longest-break.service';

@Component({
  selector: 'app-longest-break-settings',
  templateUrl: './longest-break-settings.component.html',
  styleUrls: ['./longest-break-settings.component.css'],
})
export class LongestBreakSettingsComponent implements OnInit {

  isChecked: boolean;

  constructor(private longestBreakService: LongestBreakService) { }

  ngOnInit() {
  }

  changeChecked() {
    this.longestBreakService.toggleApply();
  }

  updateLongestBreak(longestBreak: number) {
    this.longestBreakService.longestBreak = longestBreak;
  }
}
