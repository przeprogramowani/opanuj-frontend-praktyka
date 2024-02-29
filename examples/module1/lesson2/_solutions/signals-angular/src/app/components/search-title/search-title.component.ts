import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-title',
  standalone: true,
  imports: [],
  template: `<h1 class="text-2xl">Wyszukiwarka postaci {{ name }}</h1>`,
  styleUrl: './search-title.component.scss',
})
export class SearchTitleComponent {
  @Input() name: string = 'Rick and Morty';
}
