import { TestBed } from '@angular/core/testing';

import { CharacterSearchService } from './character-search.service';

describe('CharacterSearchService', () => {
  let service: CharacterSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
