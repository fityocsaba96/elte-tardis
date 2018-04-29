import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedSubjectTable } from './searched-subject-table.component';

describe('SearchedSubjectTable', () => {
  let component: SearchedSubjectTable;
  let fixture: ComponentFixture<SearchedSubjectTable>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchedSubjectTable ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedSubjectTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
