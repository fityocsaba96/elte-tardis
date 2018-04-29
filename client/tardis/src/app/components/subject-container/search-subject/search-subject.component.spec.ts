import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSubjectComponent } from './search-subject.component';

describe('SearchSubjectComponent', () => {
  let component: SearchSubjectComponent;
  let fixture: ComponentFixture<SearchSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSubjectComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
