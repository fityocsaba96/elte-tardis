import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkMyProfessorComponent } from './mark-my-professor.component';

describe('MarkMyProfessorComponent', () => {
  let component: MarkMyProfessorComponent;
  let fixture: ComponentFixture<MarkMyProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkMyProfessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkMyProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
