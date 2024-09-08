import { Component } from '@angular/core';

import { CountryService } from "../../services/country.service";

@Component({
  selector: 'app-search-property',
  templateUrl: './search-property.component.html',
  styleUrls: ['./search-property.component.scss']
})
export class SearchPropertyComponent{
  selectedProperty = "all";
  filterValue = "";

  constructor(private countryService: CountryService) {}

  onFilterChange(): void {
    this.countryService.setFilter(this.selectedProperty, this.filterValue);
  }
}
