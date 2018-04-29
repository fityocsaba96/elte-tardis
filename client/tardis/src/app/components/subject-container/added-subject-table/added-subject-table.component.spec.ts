import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedSubjectTable } from './added-subject-table.component';

describe('AddedSubjectTable', () => {
  let component: AddedSubjectTable;
  let fixture: ComponentFixture<AddedSubjectTable>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedSubjectTable ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedSubjectTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
