import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterSearchContainerComponent } from './containers/character-search-container/character-search-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharacterSearchContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'signals';
}
