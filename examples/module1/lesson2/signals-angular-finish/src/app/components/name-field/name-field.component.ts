import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-name-field',
  standalone: true,
  imports: [],
  template: `<label class="flex flex-col">
    Name
    <input
      class="border h-7 mt-1 indent-2"
      type="text"
      placeholder="Name"
      [value]="name"
      (input)="onNameChange($event)"
    />
  </label>`,
  styleUrl: './name-field.component.scss',
})
export class NameFieldComponent {
  @Input() name: string = '';
  @Output() nameChange = new EventEmitter<string>();

  onNameChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.nameChange.emit(value);
  }
}
