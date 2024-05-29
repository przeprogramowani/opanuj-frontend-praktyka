function generateRandomSubset(users) {
  const shuffled = users.sort(() => 0.5 - Math.random());
  const randomMax = Math.floor(Math.random() * users.length);
  return shuffled.slice(0, randomMax);
}

export function renderUsers(users, container) {
  container.innerHTML = '';

  const randomSubset = generateRandomSubset(users);

  randomSubset.forEach((user) => {
    container.innerHTML += `<p>${user.name}</p>`;
  });
}
