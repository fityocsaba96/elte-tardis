import { Component, OnInit } from '@angular/core';
import { ITimetable } from '../../models/ITimetable';
import { OptimalTimetablesService } from '../../services/optimal-timetables.service';

@Component({
  selector: 'app-optimal-timetables-container',
  templateUrl: './optimal-timetables-container.component.html',
  styleUrls: ['./optimal-timetables-container.component.css'],
})
export class OptimalTimetablesContainerComponent implements OnInit {

  selectedTimetable: ITimetable;
  timetables: ITimetable[];
  testTimetable: string;

  constructor(private optimalTimetablesService: OptimalTimetablesService) { }

  ngOnInit() {
    this.selectedTimetable = {};
    this.timetables = [];
  }

  async generateTimetables() { // test
    this.timetables = await this.optimalTimetablesService.generateOptimalTimetables();
    this.selectedTimetable = this.timetables[0];
    this.testTimetable = JSON.stringify(this.selectedTimetable, null, 4);
  }

  next() {
    this.selectedTimetable = this.timetables[this.timetables.indexOf(this.selectedTimetable) + 1];
    this.testTimetable = JSON.stringify(this.selectedTimetable, null, 4);
  }

  previous() {
    this.selectedTimetable = this.timetables[this.timetables.indexOf(this.selectedTimetable) - 1];
    this.testTimetable = JSON.stringify(this.selectedTimetable, null, 4);
  }

}
