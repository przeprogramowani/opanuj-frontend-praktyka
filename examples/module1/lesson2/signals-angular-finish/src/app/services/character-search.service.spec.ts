import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { CharacterSearchService } from './character-search.service';
import { Character } from '../types/Character';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

describe('CharacterSearchService', () => {
  let service: CharacterSearchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        CharacterSearchService,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(CharacterSearchService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get name correctly', () => {
    service.setName('Rick');
    expect(service.name).toBe('Rick');

    // Handle HTTP request triggered by setName
    const req = httpMock.expectOne(
      'https://rickandmortyapi.com/api/character/?name=Rick&gender='
    );
    expect(req.request.method).toBe('GET');
    req.flush({ results: [] });
  });

  it('should set and get gender correctly', () => {
    service.setGender('male');
    expect(service.gender).toBe('male');

    // Handle HTTP request triggered by setGender
    const req = httpMock.expectOne(
      'https://rickandmortyapi.com/api/character/?name=&gender=male'
    );
    expect(req.request.method).toBe('GET');
    req.flush({ results: [] });
  });

  it('should set and get sortOption correctly', () => {
    service.setSortOption('name');
    expect(service.sortOption).toBe('name');
  });

  it('should sort characters by name correctly', () => {
    const mockCharacters: Character[] = [
      {
        id: 1,
        name: 'Zebra',
        gender: 'male',
        created: new Date().toISOString(),
        image: '',
      },
      {
        id: 2,
        name: 'Apple',
        gender: 'female',
        created: new Date().toISOString(),
        image: '',
      },
    ];

    const result = service.sortCharacters(mockCharacters, 'name');
    expect(result[0].name).toBe('Apple');
    expect(result[1].name).toBe('Zebra');
  });

  it('should fetch and sort characters correctly', () => {
    const mockCharacters: Character[] = [
      {
        id: 1,
        name: 'Rick',
        gender: 'male',
        created: new Date().toISOString(),
        image: '',
      },
    ];

    service.setName('Rick');

    // Handle HTTP request
    const req = httpMock.expectOne(
      'https://rickandmortyapi.com/api/character/?name=Rick&gender='
    );
    expect(req.request.method).toBe('GET');
    req.flush({ results: mockCharacters });

    // Check that characters signal has the right value
    expect(service.characters()).toEqual(mockCharacters);
  });
});
