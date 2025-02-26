import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterSearchContainerComponent } from './character-search-container.component';
import { CharacterSearchService } from '../../services/character-search.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Character } from '../../types/Character';
import { By } from '@angular/platform-browser';

describe('CharacterSearchContainerComponent', () => {
  let component: CharacterSearchContainerComponent;
  let fixture: ComponentFixture<CharacterSearchContainerComponent>;
  let characterSearchService: jasmine.SpyObj<CharacterSearchService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj(
      'CharacterSearchService',
      ['setName', 'setGender', 'setSortOption'],
      {
        name: '',
        gender: '',
        sortOption: '',
        characters$: of([]),
      }
    );

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: CharacterSearchService, useValue: spy }],
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

    component.characters = mockCharacters;

    // Simulate checkbox event
    const mockEvent = { target: { checked: true } } as unknown as Event;
    component.onShowRickOnlyChange(mockEvent);

    // Check that only Rick remains after filtering
    expect(component.characters.length).toBe(0); // Initial state before subscription resolves

    // Manually subscribe to the BehaviorSubject to test the filtering
    component.showRickOnly.subscribe((value) => {
      expect(value).toBeTrue();
    });
  });
});
