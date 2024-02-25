import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Country } from '../../../../types/Country';

@Component({
  selector: 'app-countries-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.scss'
})
export class CountriesListComponent {
  @Input() countries: Country[] = [];
}
