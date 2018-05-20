import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timetable-paginator',
  templateUrl: './timetable-paginator.component.html',
  styleUrls: ['./timetable-paginator.component.css'],
})
export class TimetablePaginatorComponent implements OnInit, OnChanges {

  @Input() currentPage: number;
  @Input() numberOfPages: number;
  @Output() next = new EventEmitter();
  @Output() previous = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentPage']) {
      this.currentPage = changes['currentPage'].currentValue;
    }
    if (changes['numberOfPages']) {
      this.numberOfPages = changes['numberOfPages'].currentValue;
    }
  }

  clickNext() {
    this.next.emit(null);
  }

  clickPrevious() {
    this.previous.emit(null);
  }

}
