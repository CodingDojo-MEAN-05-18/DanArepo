import { TestBed, inject } from '@angular/core/testing';

import { ServiceAService } from './service-a.service';

describe('ServiceAService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceAService]
    });
  });

  it('should be created', inject([ServiceAService], (service: ServiceAService) => {
    expect(service).toBeTruthy();
  }));
});
