import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-value-input',
  standalone: true,
  imports: [],
  templateUrl: './search-value-input.component.html',
  styleUrl: './search-value-input.component.scss'
})
export class SearchValueInputComponent {
  @Input() inputValue: string = '';
  @Output() searchInputValueChange = new EventEmitter<string>();

  onInputChange(inputValue: Event): void {
    const value = (inputValue.target as HTMLInputElement).value;
    this.searchInputValueChange.emit(value);
  }
}
