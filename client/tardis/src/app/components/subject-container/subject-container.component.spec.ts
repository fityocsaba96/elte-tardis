import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SubjectService } from '../../services/subject.service';
import { AddedSubjectTableComponent } from './added-subject-table/added-subject-table.component';
import { SearchSubjectComponent } from './search-subject/search-subject.component';
import { SearchedSubjectTableComponent } from './searched-subject-table/searched-subject-table.component';
import { SubjectContainerComponent } from './subject-container.component';

describe('SubjectContainerComponent', () => {
  let component: SubjectContainerComponent;
  let fixture: ComponentFixture<SubjectContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectContainerComponent, SearchedSubjectTableComponent, SearchSubjectComponent, AddedSubjectTableComponent ],
      imports: [HttpClientModule, FormsModule],
      providers: [ SubjectService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
