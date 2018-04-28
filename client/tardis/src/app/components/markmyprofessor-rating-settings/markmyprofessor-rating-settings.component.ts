import {Component, OnInit} from '@angular/core';
import {FacultyService} from '../../services/faculty.service';
import {MarkmyprofessorRatingService} from '../../services/markmyprofessor-rating.service';

@Component({
  selector: 'app-markmyprofessor-rating-settings',
  templateUrl: './markmyprofessor-rating-settings.component.html',
  styleUrls: ['./markmyprofessor-rating-settings.component.css'],
})
export class MarkmyprofessorRatingSettingsComponent implements OnInit {

  public isApplied: boolean;
  public minimumRating: number;

  constructor(private markMyProfessorService: MarkmyprofessorRatingService,
              private facultyService: FacultyService) {
  }

  ngOnInit() {
  }

  onCheckboxChange() {
    console.log(this.isApplied);
  }

  onRatingChange() {
    if (this.isApplied) {

    }
    console.log(this.minimumRating);
  }

}
