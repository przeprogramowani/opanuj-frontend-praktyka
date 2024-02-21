import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  combineLatest,
  map,
  of,
  switchMap,
} from 'rxjs';
import { Character } from '../types/Character';

@Injectable({
  providedIn: 'root',
})
export class CharacterSearchService {
  private charactersSource$: Observable<Character[]> = new Observable<
    Character[]
  >();
  characters$: Observable<Character[]> = new Observable<Character[]>();
  private nameSubject = new BehaviorSubject<string>('');
  private genderSubject = new BehaviorSubject<string>('');
  private sortOptionSubject = new BehaviorSubject<string>('');
  private apiBaseUrl = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) {
    this.charactersSource$ = combineLatest([
      this.nameSubject,
      this.genderSubject,
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
    );

    this.characters$ = combineLatest([
      this.charactersSource$,
      this.sortOptionSubject,
    ]).pipe(
      map(([characters, sortOption]) =>
        this.sortCharacters(characters, sortOption)
      )
    );
  }

  setName(name: string) {
    this.nameSubject.next(name);
  }

  setGender(gender: string) {
    this.genderSubject.next(gender);
  }

  setSortOption(sortOption: string) {
    this.sortOptionSubject.next(sortOption);
  }

  get name(): string {
    return this.nameSubject.value;
  }

  get gender(): string {
    return this.genderSubject.value;
  }

  get sortOption(): string {
    return this.sortOptionSubject.value;
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
