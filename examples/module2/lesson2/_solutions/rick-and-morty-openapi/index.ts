import { Character, DefaultApi } from './api';

const container = document.querySelector('#characters-list');
const MAX_ELEM = 5;

const api = new DefaultApi();

const { results: characters } = await api.getCharacters();

characters!.slice(0, MAX_ELEM).forEach((character: Character) => {
  container!.innerHTML += `
    <li class="bg-white rounded-md p-4 shadow-md flex flex-row items-center space-x-2">
      <img src="${character.image}" class="w-12 h-12 rounded-full"/>
      <p>${character.name}</p>
    </li>
  `;
});
