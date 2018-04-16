import { Component } from "@angular/core";
import { Subject } from "../../models/subject";
import { AddingSubjectService } from "../../services/adding-subject.service";

@Component({
  selector: 'adding-subjects',
  templateUrl: './adding-subjects.component.html',
  styleUrls: ['./adding-subjects.component.css']
})

export class AddingSubjectsComponent {
  
  search: string;
  subjects: Subject[];

  constructor(private addingSubjectService: AddingSubjectService) { }

  ngOnInit() {
    this.search = '';
    this.subjects = [];
  }

  getSubject(subjectName: string) {
    this.addingSubjectService.getData(subjectName)
    .subscribe( res =>
    console.log(res)
    );
  }
}




