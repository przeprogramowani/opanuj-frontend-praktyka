import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GetCountriesService } from '../../services/get-countries.service';
import { Country } from '../../types/Country';
import { Subscription } from 'rxjs';

import { FilterTypeSelectComponent } from './components/filter-type-select/filter-type-select.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { SearchValueInputComponent } from './components/search-value-input/search-value-input.component';
import { SortBySelectComponent } from './components/sort-by-select/sort-by-select.component';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule, FilterTypeSelectComponent, CountriesListComponent, SearchValueInputComponent, SortBySelectComponent],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss'
})
export class CountriesComponent {
  sub: Subscription = new Subscription();
  countries: Country[] = [];

  private getCountriesService = inject(GetCountriesService);

  ngOnInit(): void {
    this.sub.add(
      this.getCountriesService.filteredCountries$.subscribe((countries) => {
        this.countries = countries;
      })
    );
  }

  get filterType(): string {
    return this.getCountriesService.filterType.value;
  }

  get inputValue(): string {
    return this.getCountriesService.inputValue.value;
  }

  get sortBy(): string {
    return this.getCountriesService.sortBy.value;
  }

  onSortChange(sortBy: string): void {
    this.getCountriesService.setSortBy(sortBy);
  }

  onFilterChange(filterType: string): void {
    this.getCountriesService.setFilterType(filterType);
  }

  onInputChange(inputValue: string): void {
    this.getCountriesService.setInputValue(inputValue);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
