import { Component, Input } from '@angular/core';
import { Character } from '../../types/Character';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [],
  template: `
    <h3>{{ character.name }}</h3>
    <img [src]="character.image" [alt]="character.name" />
  `,
  styleUrl: './character-card.component.scss',
})
export class CharacterCardComponent {
  @Input() character!: Character;
}
