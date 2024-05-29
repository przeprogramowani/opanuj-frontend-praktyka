import { Component, Input } from '@angular/core';
import { Character } from '../../types/Character';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CharacterCardComponent, CommonModule],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss',
})
export class CharacterListComponent {
  @Input() characters: Character[] = [];
}
