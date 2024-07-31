import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import {
  BehaviorSubject,
  Observable,
  catchError,
  combineLatest,
  from,
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
  characters: Signal<Character[]> = signal([]);
  private nameSignal = signal<string>('');
  private genderSignal = signal<string>('');
  private sortOptionSignal = signal<string>('');
  private apiBaseUrl = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) {
    const name$ = toObservable(this.nameSignal);
    const gender$ = toObservable(this.genderSignal);
    const sortOption$ = toObservable(this.sortOptionSignal);
    this.charactersSource$ = combineLatest([name$, gender$]).pipe(
      switchMap(([name, gender]: [string, string]) => {
        if (name !== '' || gender !== '') {
          return this.http
            .get<{ results: Character[] }>(
              `${this.apiBaseUrl}?name=${name}&gender=${gender}`
            )
            .pipe(
              map((response) => response.results || []),
              catchError((error) => {
                console.log(error);
                return of([]);
              })
            );
        } else {
          return of([]);
        }
      })
    );

    this.characters = toSignal(
      combineLatest([this.charactersSource$, sortOption$]).pipe(
        map(([characters, sortOption]) =>
          this.sortCharacters(characters, sortOption)
        )
      ),
      { initialValue: [] }
    );
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
