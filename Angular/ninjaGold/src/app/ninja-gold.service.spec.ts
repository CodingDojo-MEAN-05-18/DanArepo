import { TestBed, inject } from '@angular/core/testing';

import { NinjaGoldService } from './ninja-gold.service';

describe('NinjaGoldService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NinjaGoldService]
    });
  });

  it('should be created', inject([NinjaGoldService], (service: NinjaGoldService) => {
    expect(service).toBeTruthy();
  }));
});
