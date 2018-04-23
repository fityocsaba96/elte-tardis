import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MarkMyProfessorService} from '../../services/mark-my-professor.service';
import {MarkmyprofessorRatingSettingsComponent} from './markmyprofessor-rating-settings.component';

describe('MarkmyprofessorRatingSettingsComponent', () => {
  let component: MarkmyprofessorRatingSettingsComponent;
  let fixture: ComponentFixture<MarkmyprofessorRatingSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MarkmyprofessorRatingSettingsComponent],
      imports: [FormsModule, HttpClientModule],
      providers: [MarkMyProfessorService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkmyprofessorRatingSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
