import { TestBed } from '@angular/core/testing';

import { GetCountriesService } from './get-countries.service';

describe('GetCountriesService', () => {
  let service: GetCountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
