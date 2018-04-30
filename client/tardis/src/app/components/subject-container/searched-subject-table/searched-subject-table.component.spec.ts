import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SuiModule } from 'ng2-semantic-ui';

import { SearchSubjectComponent } from '../search-subject/search-subject.component';
import { SearchedSubjectTableComponent } from './searched-subject-table.component';

import { FacultyService } from '../../../services/faculty.service';
import { SubjectService } from '../../../services/subject.service';

describe('SearchedSubjectTableComponent', () => {
  let component: SearchedSubjectTableComponent;
  let fixture: ComponentFixture<SearchedSubjectTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchedSubjectTableComponent, SearchSubjectComponent ],
      imports: [HttpClientModule, FormsModule, SuiModule],
      providers: [ SubjectService, FacultyService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedSubjectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
