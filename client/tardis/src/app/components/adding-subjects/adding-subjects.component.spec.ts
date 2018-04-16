import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingSubjectsComponent } from './adding-subjects.component';

describe('AddingSubjectsComponent', () => {
  let component: AddingSubjectsComponent;
  let fixture: ComponentFixture<AddingSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
