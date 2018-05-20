import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';
import {LongestBreakService} from '../../services/longest-break.service';
import {LongestBreakSettingsComponent} from './longest-break-settings.component';

describe('LongestBreakSettingsComponent', () => {
  let component: LongestBreakSettingsComponent;
  let fixture: ComponentFixture<LongestBreakSettingsComponent>;
  let service: LongestBreakService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongestBreakSettingsComponent ],
      imports: [ FormsModule, SuiModule ],
      providers: [ LongestBreakService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongestBreakSettingsComponent);
    component = fixture.componentInstance;
    service = TestBed.get(LongestBreakService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('changeChecked', () => {
    it('should toggle the apply state', () => {
      spyOn(service, 'toggleApply');
      component.changeChecked();
      expect(service.toggleApply).toHaveBeenCalled();
    });
  });

  describe('updateLongestBreak', () => {
    it('should update longest break in service', () => {
      const spy = spyOnProperty(service, 'longestBreak', 'set');
      component.updateLongestBreak(2);
      expect(spy).toHaveBeenCalled();
    });
  });
});
