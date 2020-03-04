import { TestBed } from '@angular/core/testing';

import { RecrueService } from './recrue.service';

describe('RecrueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecrueService = TestBed.get(RecrueService);
    expect(service).toBeTruthy();
  });
});
