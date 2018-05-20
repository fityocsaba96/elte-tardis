import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';
import {EarliestStartService} from '../../services/earliest-start.service';
import {FreeTimeService} from '../../services/free-time.service';
import {EarliestStartSettingsComponent} from './earliest-start-settings.component';

describe('EarliestStartSettingsComponent', () => {
  let component: EarliestStartSettingsComponent;
  let fixture: ComponentFixture<EarliestStartSettingsComponent>;
  let service: EarliestStartService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarliestStartSettingsComponent ],
      imports: [ FormsModule, SuiModule ],
      providers: [ EarliestStartService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarliestStartSettingsComponent);
    component = fixture.componentInstance;
    service = TestBed.get(EarliestStartService);
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

  describe('updateEarliestStart', () => {
    it('should update earliest start in service', () => {
      const spy = spyOnProperty(service, 'earliestStart', 'set');
      component.updateEarliestStart(new Date());
      expect(spy).toHaveBeenCalled();
    });
  });
});
