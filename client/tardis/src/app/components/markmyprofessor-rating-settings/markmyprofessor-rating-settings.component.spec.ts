import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';
import {FacultyService} from '../../services/faculty.service';
import {MarkmyprofessorRatingService} from '../../services/markmyprofessor-rating.service';
import {NotifierService} from '../../services/notifier.service';
import {MarkmyprofessorRatingSettingsComponent} from './markmyprofessor-rating-settings.component';

describe('MarkmyprofessorRatingSettingsComponent', () => {
  let component: MarkmyprofessorRatingSettingsComponent;
  let fixture: ComponentFixture<MarkmyprofessorRatingSettingsComponent>;
  let service: MarkmyprofessorRatingService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MarkmyprofessorRatingSettingsComponent],
      imports: [HttpClientModule, FormsModule, SuiModule],
      providers: [MarkmyprofessorRatingService, FacultyService, NotifierService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkmyprofessorRatingSettingsComponent);
    component = fixture.componentInstance;
    service = TestBed.get(MarkmyprofessorRatingService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('changeChecked', () => {
    it('should toggle the apply state', () => {
      spyOn(service, 'toggleApply');
      component.setApplied();
      expect(service.toggleApply).toHaveBeenCalled();
    });
  });

  describe('updateRating', () => {
    it('should set the rating in the service', () => {
      spyOn(service, 'setMinimumRating');
      component.minimumRating = 4;
      component.updateRating();
      expect(service.setMinimumRating).toHaveBeenCalledWith(component.minimumRating);
    });
  });
});
