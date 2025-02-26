import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterSearchContainerComponent } from './character-search-container.component';
import { CharacterSearchService } from '../../services/character-search.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { signal } from '@angular/core';
import { Character } from '../../types/Character';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

describe('CharacterSearchContainerComponent', () => {
  let component: CharacterSearchContainerComponent;
  let fixture: ComponentFixture<CharacterSearchContainerComponent>;
  let characterSearchService: jasmine.SpyObj<CharacterSearchService>;
  let mockCharactersSignal: any;

  beforeEach(async () => {
    mockCharactersSignal = signal<Character[]>([]);

    const spy = jasmine.createSpyObj(
      'CharacterSearchService',
      ['setName', 'setGender', 'setSortOption'],
      {
        name: '',
        gender: '',
        sortOption: '',
        characters: mockCharactersSignal,
      }
    );

    await TestBed.configureTestingModule({
      imports: [],
      providers: [
        { provide: CharacterSearchService, useValue: spy },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterSearchContainerComponent);
    component = fixture.componentInstance;
    characterSearchService = TestBed.inject(
      CharacterSearchService
    ) as jasmine.SpyObj<CharacterSearchService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service methods on change events', () => {
    component.onNameChange('Rick');
    expect(characterSearchService.setName).toHaveBeenCalledWith('Rick');

    component.onGenderChange('male');
    expect(characterSearchService.setGender).toHaveBeenCalledWith('male');

    component.onSortOptionChange('name');
    expect(characterSearchService.setSortOption).toHaveBeenCalledWith('name');
  });

  it('should handle showRickOnly filter', () => {
    // Simulate characters being loaded
    const mockCharacters: Character[] = [
      {
        id: 1,
        name: 'Rick Sanchez',
        gender: 'male',
        created: new Date().toISOString(),
        image: '',
      },
      {
        id: 2,
        name: 'Morty Smith',
        gender: 'male',
        created: new Date().toISOString(),
        image: '',
      },
    ];

    // Update the mockCharactersSignal with mock data
    mockCharactersSignal.set(mockCharacters);

    // Simulate checkbox event
    const mockEvent = { target: { checked: true } } as unknown as Event;
    component.onShowRickOnlyChange(mockEvent);

    // Check that the signal value was updated properly
    expect(component.showRickOnly()).toBeTrue();

    // Check the computed value is filtered correctly
    expect(component.characters().length).toBe(1);
    expect(component.characters()[0].name).toBe('Rick Sanchez');
  });
});
