import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-select',
  standalone: true,
  imports: [],
  templateUrl: './filter-select.component.html',
  styleUrl: './filter-select.component.scss'
})
export class FilterSelectComponent {
  @Output() filterChange = new EventEmitter<string>();

  onFilterChange(event: Event): void {
    this.filterChange.emit(event);
  }
}
