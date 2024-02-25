import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sort-by-select',
  standalone: true,
  imports: [],
  templateUrl: './sort-by-select.component.html',
  styleUrl: './sort-by-select.component.scss'
})
export class SortBySelectComponent {
  @Input() sortBy: string = '';
  @Output() sortByChange = new EventEmitter<string>();

  onSortChange(sortBy: Event): void {
    const value = (sortBy.target as HTMLSelectElement).value;
    this.sortByChange.emit(value);
  }
}
