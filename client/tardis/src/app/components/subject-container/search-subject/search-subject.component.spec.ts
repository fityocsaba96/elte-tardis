import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SuiModule } from 'ng2-semantic-ui';

import { SearchSubjectComponent } from './search-subject.component';

import { SubjectService } from '../../../services/subject.service';

describe('SearchSubjectComponent', () => {
  let component: SearchSubjectComponent;
  let fixture: ComponentFixture<SearchSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSubjectComponent ],
      imports: [HttpClientModule, FormsModule, SuiModule],
      providers: [SubjectService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
