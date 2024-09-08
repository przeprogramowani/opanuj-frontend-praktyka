import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject, of } from "rxjs";
import { switchMap, map, catchError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CountryService {
  private baseUrl = "https://restcountries.com/v3.1/";

  private filterSubject = new BehaviorSubject<{ type: string, value: string }>({ type: "all", value: "" });
  private sortOptionSubject = new BehaviorSubject<string>("");

  countries$ = this.filterSubject.asObservable().pipe(
    switchMap(filter => this.fetchCountries(filter.type, filter.value)),
    switchMap(countries => this.sortOptionSubject.asObservable().pipe(
      map(sortOption => this.sortCountries(countries, sortOption))
    ))
  );

  constructor(private http: HttpClient) {}

  private fetchCountries(property: string, value: string): Observable<any> {
    if (!value.trim() && property !== "all") {
      return of([]);
    }

    if (property === "all") {
      return this.http.get(`${this.baseUrl}all`).pipe(
        catchError(() => of([]))
      );
    } else {
      return this.http.get(`${this.baseUrl}${property}/${value}`).pipe(
        catchError(() => of([]))
      );
    }
  }

  setFilter(property: string, value: string): void {
    this.filterSubject.next({ type: property, value });
  }

  setSortOption(option: string): void {
    this.sortOptionSubject.next(option);
  }

  private sortCountries(countries: any[], sortOption: string): any[] {
    if (sortOption === "name") {
      return countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
    } else if (sortOption === "population") {
      return countries.sort((a, b) => b.population - a.population);
    }
    return countries;
  }
}
