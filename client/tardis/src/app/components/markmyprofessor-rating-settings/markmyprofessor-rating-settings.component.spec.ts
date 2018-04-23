import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MarkMyProfessorService} from '../../services/mark-my-professor.service';
import {MarkMyProfessorComponent} from './mark-my-professor.component';

describe('MarkMyProfessorComponent', () => {
  let component: MarkMyProfessorComponent;
  let fixture: ComponentFixture<MarkMyProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MarkMyProfessorComponent],
      imports: [FormsModule, HttpClientModule],
      providers: [MarkMyProfessorService],
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
