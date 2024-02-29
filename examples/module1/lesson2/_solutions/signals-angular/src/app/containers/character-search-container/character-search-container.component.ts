import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { CharacterCardComponent } from '../../components/character-card/character-card.component';
import { CharacterListComponent } from '../../components/character-list/character-list.component';
import { GenderSelectComponent } from '../../components/gender-select/gender-select.component';
import { NameFieldComponent } from '../../components/name-field/name-field.component';
import { SearchTitleComponent } from '../../components/search-title/search-title.component';
import { SortSelectComponent } from '../../components/sort-select/sort-select.component';
import { CharacterSearchService } from '../../services/character-search.service';

@Component({
  selector: 'app-character-search-container',
  standalone: true,
  imports: [
    SearchTitleComponent,
    NameFieldComponent,
    GenderSelectComponent,
    SortSelectComponent,
    CharacterListComponent,
    CharacterCardComponent,
    CommonModule,
  ],
  templateUrl: './character-search-container.component.html',
  styleUrl: './character-search-container.component.scss',
})
export class CharacterSearchContainerComponent {
  showRickOnly = signal(false);
  characters = computed(() => {
    if (this.showRickOnly()) {
      return this.characterSearchService
        .characters()
        .filter((character) => character.name.includes('Rick'));
    } else {
      return this.characterSearchService.characters();
    }
  });

  constructor(private characterSearchService: CharacterSearchService) {
    effect(() => {
      console.log('showRickOnly changed to', this.showRickOnly());
    });

    effect(() => {
      console.log(
        'characters changed to',
        this.characterSearchService.characters()
      );
    });
  }

  get name(): string {
    return this.characterSearchService.name;
  }

  get gender(): string {
    return this.characterSearchService.gender;
  }

  get sortOption(): string {
    return this.characterSearchService.sortOption;
  }

  onNameChange(newName: string): void {
    this.characterSearchService.setName(newName);
  }

  onGenderChange(newGender: string): void {
    this.characterSearchService.setGender(newGender);
  }

  onSortOptionChange(newSortOption: string): void {
    this.characterSearchService.setSortOption(newSortOption);
  }

  onShowRickOnlyChange(event: Event): void {
    const value = (event.target as HTMLInputElement).checked;

    this.showRickOnly.set(value);
  }
}
