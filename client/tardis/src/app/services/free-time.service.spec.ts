import {inject, TestBed} from '@angular/core/testing';

import {FreeTimeService} from './free-time.service';

describe('FreeTimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FreeTimeService],
    });
  });

  it('should be created', inject([FreeTimeService], (service: FreeTimeService) => {
    expect(service).toBeTruthy();
  }));
});
