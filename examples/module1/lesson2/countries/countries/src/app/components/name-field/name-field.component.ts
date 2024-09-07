import { Component } from '@angular/core';

import { NameService } from "../../services/name.service";

@Component({
  selector: 'app-name-field',
  templateUrl: './name-field.component.html',
  styleUrls: ['./name-field.component.scss']
})
export class NameFieldComponent {
  constructor(public nameService: NameService) {}

  handleNameChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.nameService.setName(inputElement.value);
  }
}
