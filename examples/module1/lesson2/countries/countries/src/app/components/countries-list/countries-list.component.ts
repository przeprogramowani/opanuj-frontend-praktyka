import { Component, OnInit } from '@angular/core';

import { CountryService } from "../../services/country.service";

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {
  countries: any[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.countries$.subscribe((data) => {
      this.countries = data;
    });
  }
}
