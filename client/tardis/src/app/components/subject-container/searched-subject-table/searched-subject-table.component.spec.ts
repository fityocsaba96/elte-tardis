import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedSubjectTableComponent } from './searched-subject-table.component';

describe('SearchedSubjectTableComponent', () => {
  let component: SearchedSubjectTableComponent;
  let fixture: ComponentFixture<SearchedSubjectTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchedSubjectTableComponent ],
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
