import { Component } from '@angular/core';

import { CountryService } from "../../services/country.service";

@Component({
  selector: 'app-sort-select',
  templateUrl: './sort-select.component.html',
  styleUrls: ['./sort-select.component.scss']
})
export class SortSelectComponent {
  sortOption = "";

  constructor(private countryService: CountryService) {}

  onSortChange(): void {
    this.countryService.setSortOption(this.sortOption);
  }
}
