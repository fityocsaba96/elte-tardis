import {Injectable} from '@angular/core';

@Injectable()
export class FacultyService {

  private selectedFaculty: string;

  constructor() {
    this.selectedFaculty = 'ELTE-IK';
  }

  selectFaculty(selectedFaculty) {
    this.selectedFaculty = 'ELTE-' + selectedFaculty;
  }

  getSelectedFaculty(): string {
    return this.selectedFaculty;
  }

}
