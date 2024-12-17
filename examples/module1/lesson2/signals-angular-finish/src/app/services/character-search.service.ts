import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { combineLatest, map, of, switchMap, catchError } from 'rxjs';
import { Character } from '../types/Character';

@Injectable({
  providedIn: 'root',
})
export class CharacterSearchService {
  private readonly charactersSource$: Signal<Character[]> = signal<Character[]>([]);
  readonly characters: Signal<Character[]> = signal<Character[]>([]);

  private readonly nameSignal: WritableSignal<string> = signal<string>('');
  private readonly genderSignal: WritableSignal<string> = signal<string>('');
  private readonly sortOptionSignal: WritableSignal<string> = signal<string>('');

  private readonly apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://rickandmortyapi.com/api/character/';

    this.charactersSource$ = toSignal(
      combineLatest([
        toObservable(this.nameSignal),
        toObservable(this.genderSignal),
      ]).pipe(
        switchMap(([name, gender]) =>
          this.fetchCharacters(name, gender)
        )
      ),
      { initialValue: [] }
    );

    this.characters = toSignal(
      combineLatest([
        toObservable(this.charactersSource$),
        toObservable(this.sortOptionSignal),
      ]).pipe(
        map(([characters, sortOption]) =>
          this.sortCharacters(characters, sortOption)
        )
      ),
      { initialValue: [] }
    );
  }

  setName(name: string): void {
    this.nameSignal.set(name);
  }

  setGender(gender: string): void {
    this.genderSignal.set(gender);
  }

  setSortOption(sortOption: string): void {
    this.sortOptionSignal.set(sortOption);
  }

  // Gettery
  get name(): string {
    return this.nameSignal();
  }

  get gender(): string {
    return this.genderSignal();
  }

  get sortOption(): string {
    return this.sortOptionSignal();
  }

  private fetchCharacters(name: string, gender: string) {
    if (!name && !gender) {
      return of([]);
    }
    return this.http
      .get<{ results: Character[] }>(
        `${this.apiBaseUrl}?name=${name}&gender=${gender}`
      )
      .pipe(
        map((response) => response.results || []),
        catchError(() => of([]))
      );
  }

  private sortCharacters(characters: Character[], sortOption: string): Character[] {
    if (!sortOption) return characters;
    return [...characters].sort((a, b) => {
      switch (sortOption) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'created':
          return new Date(a.created).getTime() - new Date(b.created).getTime();
        default:
          return 0;
      }
    });
  }
}
