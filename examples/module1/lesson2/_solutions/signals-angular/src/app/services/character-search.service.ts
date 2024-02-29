import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, computed, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { combineLatest, map, of, switchMap } from 'rxjs';
import { Character } from '../types/Character';

@Injectable({
  providedIn: 'root',
})
export class CharacterSearchService {
  private charactersSource: Signal<Character[]> = signal([]);
  private nameSignal = signal('');
  private genderSignal = signal('');
  private sortOptionSignal = signal('');
  characters: Signal<Character[]> = signal([]);
  charactersNew: Signal<Character[]> = signal([]);
  private apiBaseUrl = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) {
    this.charactersSource = toSignal(
      combineLatest([
        toObservable(this.nameSignal),
        toObservable(this.genderSignal),
      ]).pipe(
        switchMap(([name, gender]) => {
          if (name !== '' || gender !== '') {
            return this.http
              .get<{ results: Character[] }>(
                `${this.apiBaseUrl}?name=${name}&gender=${gender}`
              )
              .pipe(map((response) => response.results || []));
          } else {
            return of([]);
          }
        })
      ),
      { initialValue: [] }
    );

    this.characters = computed(() => {
      return this.sortCharacters(
        this.charactersSource(),
        this.sortOptionSignal()
      );
    });
  }

  setName(name: string) {
    this.nameSignal.set(name);
  }

  setGender(gender: string) {
    this.genderSignal.set(gender);
  }

  setSortOption(sortOption: string) {
    this.sortOptionSignal.set(sortOption);
  }

  get name(): string {
    return this.nameSignal();
  }

  get gender(): string {
    return this.genderSignal();
  }

  get sortOption(): string {
    return this.sortOptionSignal();
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
