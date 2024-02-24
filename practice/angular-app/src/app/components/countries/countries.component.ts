import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetCountriesService } from '../../services/get-countries.service';
import { Country } from '../../types/Country';
import { BehaviorSubject, combineLatest, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss'
})
export class CountriesComponent {
  private inputValue = new BehaviorSubject<string>('');
  private filterType = new BehaviorSubject<string>('');
  private sortBy = new BehaviorSubject<string>('name');

  filteredCountries$ = combineLatest([
    this.filterType,
    this.inputValue,
    this.sortBy
  ]).pipe(
    switchMap(([filterType, inputValue, sortBy]) =>
      this.getCountriesService.getCountriesBy(inputValue, filterType).pipe(
        map(countries => this.sortCountries(countries, sortBy))
      )
    )
  );

  private getCountriesService = inject(GetCountriesService);
  
  ngOnInit(): void {
    this.filterType.next(this.filterType.value);
  }

  onFilterChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.filterType.next(value);
  }

  filterCountries(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.inputValue.next(value);
  }

  onSortChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.sortBy.next(value);
  }

  private sortCountries(countries: Country[], sortBy: string): Country[] {
    return countries.sort((a, b) => sortBy === 'population' ?
      b.population - a.population :
      a.name.common.localeCompare(b.name.common));
  }

}
