// @vitest-environment jsdom

import { describe, test, expect } from 'vitest';
import { renderItems } from './renderer';

const users: User[] = [
  { id: 1, name: 'John', age: 30, role: 'user' },
  { id: 2, name: 'Jane', age: 25, role: 'admin' },
  { id: 3, name: 'Jack', age: 40, role: 'user' },
];

describe('User renderer', () => {
  test('should render all users if admin is rendering the list', () => {
    localStorage.setItem('userRole', 'admin');

    const container = document.createElement('div');
    renderItems(container, users);
    expect(Array.from(container.querySelectorAll('li'))).toHaveLength(3);
  });

  test('should render only regular users if non-admin is rendering the list', () => {
    localStorage.setItem('userRole', 'user');

    const container = document.createElement('div');
    renderItems(container, users);
    expect(Array.from(container.querySelectorAll('li'))).toHaveLength(2);
  });

  test('should render correct name for each user', () => {
    localStorage.setItem('userRole', 'admin');

    const container = document.createElement('div');
    renderItems(container, users);

    const expectedItems = users.map(user => `${user.role === 'admin' && '(Admin)'} Name: ${user.name}, Age: ${user.age}`);

    const actualItems = Array.from(container.querySelectorAll('li')).map(li => li.textContent);

    expect(actualItems).toEqual(expectedItems);
  });
});
