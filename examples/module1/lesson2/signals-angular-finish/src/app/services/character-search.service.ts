import { HttpClient } from '@angular/common/http';
import {
  Injectable,
  WritableSignal,
  computed,
  effect,
  signal,
} from '@angular/core';
import { Character } from '../types/Character';

@Injectable({
  providedIn: 'root',
})
export class CharacterSearchService {
  private charactersSource: WritableSignal<Character[]> = signal([]);
  private nameSubject = signal('');
  private genderSubject = signal('');
  private sortOptionSubject = signal('');
  private apiBaseUrl = 'https://rickandmortyapi.com/api/character/';

  characters = computed(() =>
    this.sortCharacters(this.charactersSource(), this.sortOptionSubject())
  );

  constructor(private http: HttpClient) {
    effect(
      (cleanUp) => {
        if (this.nameSubject() !== '' || this.genderSubject() !== '') {
          this.charactersSource.set([]);
        }

        const subscription = this.http
          .get<{ results: Character[] }>(
            `${
              this.apiBaseUrl
            }?name=${this.nameSubject()}&gender=${this.genderSubject()}`
          )
          .subscribe((response) => {
            this.charactersSource.set(response.results);
          });

        cleanUp(() => subscription.unsubscribe);
      },
      { allowSignalWrites: true }
    );
  }

  setName(name: string) {
    this.nameSubject.set(name);
  }

  setGender(gender: string) {
    this.genderSubject.set(gender);
  }

  setSortOption(sortOption: string) {
    this.sortOptionSubject.set(sortOption);
  }

  get name(): string {
    return this.nameSubject();
  }

  get gender(): string {
    return this.genderSubject();
  }

  get sortOption(): string {
    return this.sortOptionSubject();
  }

  sortCharacters(characters: Character[], sortOption: string): Character[] {
    return [...characters].sort((a, b) => {
      if (sortOption === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortOption === 'created') {
        return new Date(a.created).getTime() - new Date(b.created).getTime();
      }
      return 0;
    });
  }
}
