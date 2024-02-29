import axios from 'axios';
import { renderUsers } from './renderer';

const contentEl2 = document.getElementById('content2');
const loaderEl2 = document.getElementById('loader2');
const button2 = document.getElementById('button2');

let ctrl = null;

button2.addEventListener('click', async () => {
  if (ctrl) {
    ctrl.abort();
  }

  try {
    loaderEl2.classList.remove('hidden');
    console.log('Nowe zapytanie...');
    ctrl = new AbortController();
    const {
      data: { users },
    } = await axios.get('http://localhost:3000/api/data/users?timeout=2000', {
      signal: ctrl.signal,
    });

    renderUsers(users, contentEl2);
    ctrl = null;
    loaderEl2.classList.add('hidden');
  } catch (error) {
    if (!axios.isCancel(error)) {
      console.error('Błąd:', error);
    }
  }
});
