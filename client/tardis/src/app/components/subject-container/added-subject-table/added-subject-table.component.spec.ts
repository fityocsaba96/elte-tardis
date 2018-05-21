import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SuiModule } from 'ng2-semantic-ui';

import { SearchSubjectComponent } from '../search-subject/search-subject.component';
import { SearchedSubjectTableComponent } from '../searched-subject-table/searched-subject-table.component';
import { AddedSubjectTableComponent } from './added-subject-table.component';

import { FacultyService } from '../../../services/faculty.service';
import { SubjectService } from '../../../services/subject.service';

describe('AddedSubjectTableComponent', () => {
  let component: AddedSubjectTableComponent;
  let fixture: ComponentFixture<AddedSubjectTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedSubjectTableComponent, SearchedSubjectTableComponent, SearchSubjectComponent ],
      imports: [HttpClientModule, FormsModule, SuiModule],
      providers: [ SubjectService, FacultyService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedSubjectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
