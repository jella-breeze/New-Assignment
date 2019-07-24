import { TestBed } from '@angular/core/testing';

import { OverAllService } from './over-all.service';

describe('OverAllService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OverAllService = TestBed.get(OverAllService);
    expect(service).toBeTruthy();
  });
});
