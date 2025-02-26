import { Component } from '@angular/core';
import { CharacterSearchContainerComponent } from './containers/character-search-container/character-search-container.component';

@Component({
  selector: 'app-root',
  imports: [CharacterSearchContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'signals';
}
