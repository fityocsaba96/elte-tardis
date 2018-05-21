import {Component, OnInit} from '@angular/core';
import {FacultyService} from '../../services/faculty.service';
import {MarkmyprofessorRatingService} from '../../services/markmyprofessor-rating.service';

@Component({
  selector: 'app-markmyprofessor-rating-settings',
  templateUrl: './markmyprofessor-rating-settings.component.html',
  styleUrls: ['./markmyprofessor-rating-settings.component.css'],
})
export class MarkmyprofessorRatingSettingsComponent implements OnInit {

  isApplied: boolean;
  minimumRating: number;

  constructor(private markMyProfessorService: MarkmyprofessorRatingService) {
  }

  ngOnInit() {
  }

  setApplied() {
    this.markMyProfessorService.toggleApply();
  }

  updateRating() {
    this.markMyProfessorService.setMinimumRating(this.minimumRating);
  }

}
