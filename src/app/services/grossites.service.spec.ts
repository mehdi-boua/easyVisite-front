import { TestBed } from '@angular/core/testing';

import { GrossitesService } from './grossites.service';

describe('GrossitesService', () => {
  let service: GrossitesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrossitesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
