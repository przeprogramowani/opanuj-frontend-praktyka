import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Country } from '../types/Country';

@Injectable({
  providedIn: 'root'
})
export class GetCountriesService {

  private baseUrl = 'https://restcountries.com/v3.1';
  private endpoints: { [key: string]: string } = {
    capital: 'capital',
    name: 'name',
    currency: 'currency',
    lang: 'lang'
  };

  constructor(private http: HttpClient) { }

  getCountriesBy(searchValue?: string, searchType?: string): Observable<Country[]> {
    const url = searchValue && searchType ? `${this.baseUrl}/${this.endpoints[searchType]}/${searchValue}` : `${this.baseUrl}/all`;
    return this.http.get<Country[]>(url).pipe(
      catchError(error => {
        // Optionally filter to only suppress certain errors, e.g., 404
        if (error.status === 404) {
          // Return an empty array without logging for expected 404 errors
          return of([]);
        }
        // Re-throw other errors for further handling or logging
        return throwError(error);
      })
    );
  }
}
