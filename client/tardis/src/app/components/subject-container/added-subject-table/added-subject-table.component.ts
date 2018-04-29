import { Component, OnInit } from "@angular/core";
import { SubjectService } from "../../../services/subject.service";
import { Subject } from "../../../models/subject";

@Component({
  selector: 'added-subject-table',
  templateUrl: './added-subject-table.component.html',
  styleUrls: ['./added-subject-table.component.css']
})

export class AddedSubjectTable implements OnInit{
  
  subjects: Subject[];
  conflicts: Subject[];
  hidden: boolean;

  constructor(private SubjectService: SubjectService) {
    this.subjects = SubjectService.getAddSubject();
    if(this.subjects.length > 0) {
      this.hidden = false;
    }
   }

   ngOnInit() {
    this.conflicts = [];
    this.hidden = true;
  }

   addToConflicts(subject: Subject) {
     this.conflicts.push(subject);
     console.log(this.conflicts);
   }

   deleteSubjectFromAddTable(subject: Subject) {
     let index = this.subjects.indexOf(subject);
     if(index !== -1) {
       this.subjects.splice(index,1);
     }
   }

  

  
}




