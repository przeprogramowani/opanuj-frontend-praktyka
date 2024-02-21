import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sort-select',
  standalone: true,
  imports: [],
  template: `
    <label class="flex flex-col">
      Sort by
      <select
        [value]="sortOption"
        (change)="onSortOptionChange($event)"
        class="border h-7 mt-1"
      >
        <option value="">Initial</option>
        <option value="name">Name</option>
        <option value="created">Created Date</option>
      </select>
    </label>
  `,
  styleUrl: './sort-select.component.scss',
})
export class SortSelectComponent {
  @Input() sortOption: string = '';
  @Output() sortOptionChange = new EventEmitter<string>();

  onSortOptionChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.sortOptionChange.emit(value);
  }
}
