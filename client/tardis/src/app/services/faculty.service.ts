import {Injectable} from '@angular/core';

@Injectable()
export class FacultyService {

  private selectedFaculty: string;

  constructor() {
  }

  selectFaculty(selectedFaculty) {
    this.selectedFaculty = 'ELTE-' + selectedFaculty;
  }

  getSelectedFaculty(): string {
    return this.selectedFaculty;
  }

}
