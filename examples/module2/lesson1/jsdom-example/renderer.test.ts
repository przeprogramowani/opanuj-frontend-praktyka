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
    
    const items = Array.from(container.querySelectorAll('li'));
    expect(items).toHaveLength(3);
    expect(items[0].textContent).toBe('false Name: John, Age: 30');
    expect(items[1].textContent).toBe('(Admin) Name: Jane, Age: 25');
    expect(items[2].textContent).toBe('false Name: Jack, Age: 40');
  });

  test('should render only regular users if non-admin is rendering the list', () => {
    localStorage.setItem('userRole', 'user');

    const container = document.createElement('div');
    renderItems(container, users);
    
    const items = Array.from(container.querySelectorAll('li'));
    expect(items).toHaveLength(2);
    expect(items[0].textContent).toBe('false Name: John, Age: 30');
    expect(items[1].textContent).toBe('false Name: Jack, Age: 40');
  });
});
