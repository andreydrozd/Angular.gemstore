import { TestBed, inject } from '@angular/core/testing';

import { GemService } from './gem.service';

describe('GemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GemService]
    });
  });

  it('should be created', inject([GemService], (service: GemService) => {
    expect(service).toBeTruthy();
  }));
});
