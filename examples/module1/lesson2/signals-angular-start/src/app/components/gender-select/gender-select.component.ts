import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-gender-select',
  standalone: true,
  imports: [],
  template: `
    <label class="flex flex-col">
      Gender
      <select
        [value]="gender"
        (change)="onGenderChange($event)"
        class="border h-7 mt-1"
      >
        <option value="">Any Gender</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </label>
  `,
  styleUrl: './gender-select.component.scss',
})
export class GenderSelectComponent {
  @Input() gender: string = '';
  @Output() genderChange = new EventEmitter<string>();

  onGenderChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.genderChange.emit(value);
  }
}
