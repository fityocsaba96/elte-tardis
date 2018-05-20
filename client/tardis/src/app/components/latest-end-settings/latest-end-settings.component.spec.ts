import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';
import {LatestEndService} from '../../services/latest-end.service';
import {LatestEndSettingsComponent} from './latest-end-settings.component';

describe('LatestEndSettingsComponent', () => {
  let component: LatestEndSettingsComponent;
  let fixture: ComponentFixture<LatestEndSettingsComponent>;
  let service: LatestEndService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestEndSettingsComponent ],
      imports: [ FormsModule, SuiModule ],
      providers: [ LatestEndService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestEndSettingsComponent);
    component = fixture.componentInstance;
    service = TestBed.get(LatestEndService);
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

  describe('updateLatestEnd', () => {
    it('should update latest end in service', () => {
      const spy = spyOnProperty(service, 'latestEnd', 'set');
      component.updateLatestEnd(new Date());
      expect(spy).toHaveBeenCalled();
    });
  });
});
