import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SuiModule } from 'ng2-semantic-ui';
import { FacultyService } from '../../services/faculty.service';
import { FreeTimeService } from '../../services/free-time.service';
import { MarkmyprofessorRatingService } from '../../services/markmyprofessor-rating.service';
import { NotifierService } from '../../services/notifier.service';
import { OptimalTimetablesService } from '../../services/optimal-timetables.service';
import { SubjectService } from '../../services/subject.service';
import { TimetablePaginatorComponent } from '../timetable-paginator/timetable-paginator.component';
import { TimetableComponent } from '../timetable/timetable.component';
import { OptimalTimetablesContainerComponent } from './optimal-timetables-container.component';

describe('OptimalTimetablesContainerComponent', () => {
  let component: OptimalTimetablesContainerComponent;
  let fixture: ComponentFixture<OptimalTimetablesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OptimalTimetablesContainerComponent,
        TimetableComponent,
        TimetablePaginatorComponent,
      ],
      imports: [HttpClientModule, FormsModule, SuiModule],
      providers: [
        OptimalTimetablesService,
        SubjectService,
        FreeTimeService,
        MarkmyprofessorRatingService,
        FacultyService,
        NotifierService,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptimalTimetablesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
