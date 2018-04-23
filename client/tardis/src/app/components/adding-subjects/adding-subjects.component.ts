import { Component, OnInit } from "@angular/core";
import { Subject } from "../../models/subject";
import { AddingSubjectService } from "../../services/adding-subject.service";

@Component({
  selector: 'adding-subjects',
  templateUrl: './adding-subjects.component.html',
  styleUrls: ['./adding-subjects.component.css']
})

export class AddingSubjectsComponent implements OnInit{
  
  search: string;
  subjects: Subject[];
  ttkURL: string;

  constructor(private addingSubjectService: AddingSubjectService) { }

  ngOnInit() {
    this.search = '';
    this.subjects = [];
  }

  getSubject(subjectName: string) {
    this.addingSubjectService.getData(subjectName)
    .subscribe( (res) => {
      this.parseHtml(),
      console.log(this.subjects)
    }, (err) => {
      console.log(err);
    });
  }

  parseHtml(): Document {
    const parser = new DOMParser();
    const table = document.querySelector('table');
    if (table == null) {
      return;
    }
    const rows = Array.from(table.querySelectorAll('tr'));
    rows.forEach((row) => {
        const nameCell = row.querySelector('td');
        this.subjects.push({
          kurzusnev: nameCell.innerText.trim()
        });
    });
    return document;
  }
}




