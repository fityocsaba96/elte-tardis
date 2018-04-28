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
  parser: DOMParser;

  constructor(private addingSubjectService: AddingSubjectService) { }

  ngOnInit() {
    this.search = '';
    this.subjects = [];
    this.parser = new DOMParser();
  }

  getSubject(subjectName: string) {
    this.addingSubjectService.getData(subjectName)
    .subscribe( (res) => {
      this.parseHtml(res)
    }, (err) => {
      console.log(err);
    });
  }

  parseHtml(html: string): Document {
    const document = this.parser.parseFromString(html,'text/html');
    const table = document.querySelector('tbody');
    if (table == null) {
      return;
    }
    const rows = Array.from(table.querySelectorAll('tr'));
    rows.forEach((row) => {
        this.subjects.push({
          kurzusnev: row.cells[0].innerText.trim(),
          kurzuskod: row.cells[1].innerText.trim(),
          idopont: row.cells[2].innerText.trim(),
          helyszin: row.cells[3].innerText.trim(),
          hetek: row.cells[4].innerText.trim(),
          megj: row.cells[5].innerText.trim(),
          oratipus: row.cells[6].innerText.trim(),
          csop: row.cells[7].innerText.trim(),
          letszam: row.cells[8].innerText.trim(),
          ea: row.cells[9].innerText.trim(),
          gyak: row.cells[10].innerText.trim(),
          oktato: row.cells[11].innerText.trim()
        });
    });
    return document;
  }
}




