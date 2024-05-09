function filterUsers(users: User[]): User[] {
  const userRole = localStorage.getItem('userRole');

  const allowedUsers = users.filter((user) => {
    if (userRole === 'admin') {
      return true;
    }

    return user.role === 'user';
  });

  return allowedUsers;
}

export function renderItems(container: HTMLElement, users: User[]): void {
  const allowedUsers = filterUsers(users);

  container.innerHTML = `
    <ul>
      ${allowedUsers
        .map(
          (user) =>
            `<li>${user.role === 'admin' && '(Admin)'} Name: ${
              user.name
            }, Age: ${user.age}</li>`
        )
        .join('')}
    </ul>
  `;
}
