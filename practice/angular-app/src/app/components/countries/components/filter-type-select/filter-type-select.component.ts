import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-type-select',
  standalone: true,
  imports: [],
  templateUrl: './filter-type-select.component.html',
  styleUrl: './filter-type-select.component.scss'
})
export class FilterTypeSelectComponent {
  @Input() filterType: string = '';
  @Output() filterTypeChange = new EventEmitter<string>();

  onFilterChange(filterType: Event): void {
    const value = (filterType.target as HTMLSelectElement).value;
    this.filterTypeChange.emit(value);
  }
}
