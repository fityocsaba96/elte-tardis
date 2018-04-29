import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddedSubjectTableComponent } from './added-subject-table.component';

describe('AddedSubjectTableComponent', () => {
  let component: AddedSubjectTableComponent;
  let fixture: ComponentFixture<AddedSubjectTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedSubjectTableComponent ],
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
