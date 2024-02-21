import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject, Subscription, combineLatest } from 'rxjs';
import { CharacterCardComponent } from '../../components/character-card/character-card.component';
import { CharacterListComponent } from '../../components/character-list/character-list.component';
import { GenderSelectComponent } from '../../components/gender-select/gender-select.component';
import { NameFieldComponent } from '../../components/name-field/name-field.component';
import { SearchTitleComponent } from '../../components/search-title/search-title.component';
import { SortSelectComponent } from '../../components/sort-select/sort-select.component';
import { CharacterSearchService } from '../../services/character-search.service';
import { Character } from '../../types/Character';

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
  characters: Character[] = [];
  sub: Subscription = new Subscription();
  showRickOnly = new BehaviorSubject<boolean>(false);

  constructor(private characterSearchService: CharacterSearchService) {}

  ngOnInit() {
    this.sub = combineLatest([
      this.characterSearchService.characters$,
      this.showRickOnly,
    ]).subscribe(([characters, showRickOnly]) => {
      if (showRickOnly) {
        this.characters = characters.filter((character) =>
          character.name.includes('Rick')
        );
      } else {
        this.characters = characters;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
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

    this.showRickOnly.next(value);
  }
}
