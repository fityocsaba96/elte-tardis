import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';
import {FacultyService} from '../../services/faculty.service';
import {MarkmyprofessorRatingService} from '../../services/markmyprofessor-rating.service';
import {MarkmyprofessorRatingSettingsComponent} from './markmyprofessor-rating-settings.component';

describe('MarkmyprofessorRatingSettingsComponent', () => {
  let component: MarkmyprofessorRatingSettingsComponent;
  let fixture: ComponentFixture<MarkmyprofessorRatingSettingsComponent>;
  let service: MarkmyprofessorRatingService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MarkmyprofessorRatingSettingsComponent],
      imports: [HttpClientModule, FormsModule, SuiModule],
      providers: [MarkmyprofessorRatingService, FacultyService],
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

  describe('setApplied', () => {
    it('should set the minimum rating in the service', () => {
      spyOn(service, 'setMinimumRating');
      component.setApplied();
      expect(service.setMinimumRating).toHaveBeenCalledWith(0);
    });
    it('should set the minimum rating in the service with applied and rating', () => {
      spyOn(service, 'setMinimumRating');
      component.isApplied = true;
      component.minimumRating = 4;
      component.setApplied();
      expect(service.setMinimumRating).toHaveBeenCalledWith(4);
    });
  });

  describe('updateRating', () => {
    it('should set the rating in the service if applied', () => {
      spyOn(service, 'setMinimumRating');
      component.isApplied = true;
      component.minimumRating = 4;
      component.updateRating();
      expect(service.setMinimumRating).toHaveBeenCalledWith(component.minimumRating);
    });
    it('should not set the rating if it not applied', () => {
      spyOn(service, 'setMinimumRating');
      component.isApplied = false;
      component.updateRating();
      expect(service.setMinimumRating).not.toHaveBeenCalled();
    });
  });

});
