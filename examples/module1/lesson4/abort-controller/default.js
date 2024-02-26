import axios from 'axios';
import { renderUsers } from './renderer';

const contentEl = document.getElementById('content');
const loaderEl = document.getElementById('loader');
const button = document.getElementById('button');

button.addEventListener('click', async () => {
  loaderEl.classList.remove('hidden');
  console.log('Nowe zapytanie...');
  const {
    data: { users },
  } = await axios.get('http://localhost:3000/api/data/users?timeout=2000');
  renderUsers(users, contentEl);
  loaderEl.classList.add('hidden');
});
