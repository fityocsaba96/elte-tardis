import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetablePaginatorComponent } from './timetable-paginator.component';

describe('TimetablePaginatorComponent', () => {
  let component: TimetablePaginatorComponent;
  let fixture: ComponentFixture<TimetablePaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetablePaginatorComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetablePaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
