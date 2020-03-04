import { TestBed } from '@angular/core/testing';

import { ListepersonneService } from './listepersonne.service';

describe('ListepersonneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListepersonneService = TestBed.get(ListepersonneService);
    expect(service).toBeTruthy();
  });
});
