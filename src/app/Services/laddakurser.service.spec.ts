import { TestBed } from '@angular/core/testing';

import { LaddakurserService } from './laddakurser.service';

describe('LaddakurserService', () => {
  let service: LaddakurserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaddakurserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
