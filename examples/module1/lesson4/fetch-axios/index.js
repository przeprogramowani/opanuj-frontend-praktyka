import axios from 'axios';

// GET w Fetch API
fetch('/api/data/users')
  .then((response) => response.json())
  .then((data) => renderUsers(data.users, 'container-1'))
  .catch((error) => console.error('Fetching error:', error));

// GET w Axios
axios
  .get('/api/data/users')
  .then((response) => renderUsers(response.data.users, 'container-2'))
  .catch((error) => console.error('Fetching error:', error));

function renderUsers(users, containerId) {
  const usersList = document.getElementById(containerId);
  usersList.innerHTML = `
    <ul>
      ${users.map((user) => `<li>${user.name}</li>`).join('')}
    </ul>
  `;
}
