import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, combineLatest, map, of, switchMap, throwError } from 'rxjs';
import { Country } from '../types/Country';

@Injectable({
  providedIn: 'root'
})
export class GetCountriesService {
  private searchValueInput = new BehaviorSubject<string>('');
  private filterTypeSelect = new BehaviorSubject<string>('');
  private sortBySelect = new BehaviorSubject<string>('name');
  private countries$ = new Observable<Country[]>();
  filteredCountries$ = new Observable<Country[]>();

  private baseUrl = 'https://restcountries.com/v3.1';

  private endpoints: { [key: string]: string } = {
    capital: 'capital',
    name: 'name',
    currency: 'currency',
    lang: 'lang'
  };

  constructor(private http: HttpClient) {
    this.getCountries();
    this.filterCountries();
  }

  setFilterType(filterType: string): void {
    this.filterTypeSelect.next(filterType);
  }

  setSortBy(sortBy: string): void {
    this.sortBySelect.next(sortBy);
  }

  setInputValue(inputValue: string): void {
    this.searchValueInput.next(inputValue);
  }

  get filterType(): BehaviorSubject<string> {
    return this.filterTypeSelect;
  }

  get inputValue(): BehaviorSubject<string> {
    return this.searchValueInput;
  }

  get sortBy(): BehaviorSubject<string> {
    return this.sortBySelect;
  }

  getCountries(): void {
    this.countries$ = combineLatest([
      this.inputValue,
      this.filterTypeSelect,
    ]).pipe(
      switchMap(([inputValue, filterType]) => {
        const url = inputValue && filterType ? `${this.baseUrl}/${this.endpoints[filterType]}/${inputValue}` : `${this.baseUrl}/all`;
        return this.http.get<Country[]>(url).pipe(
          catchError(error => {
            if (error.status === 404) {
              return of([]);
            }
            return throwError(error);
          })
        );
      })
    );
  }

  filterCountries(): void {
    this.filteredCountries$ = combineLatest([
      this.countries$,
      this.sortBySelect,
    ]).pipe(
      map(([countries, sortBySelect]) =>
        this.sortCountries(countries, sortBySelect)
      )
    );
  }

  sortCountries(countries: Country[], sortBy: string): Country[] {
    return countries.sort((a, b) => sortBy === 'population' ?
      b.population - a.population :
      a.name.common.localeCompare(b.name.common));
  }
}
