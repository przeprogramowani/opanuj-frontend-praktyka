// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import { test, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

afterEach(cleanup);

test('title validation works', async () => {
  render(<App />);
  await userEvent.click(screen.getByText('Add book'));

  expect(screen.getByText('Title is required')).toBeInTheDocument();

  await userEvent.type(screen.getByLabelText('Enter title:'), 'Ti');
  await userEvent.click(screen.getByText('Add book'));

  expect(
    screen.getByText('Title must be at least 3 characters long')
  ).toBeInTheDocument();

  await userEvent.clear(screen.getByLabelText('Enter title:'));
  await userEvent.type(screen.getByLabelText('Enter title:'), 'Tit');
  await userEvent.click(screen.getByText('Add book'));

  expect(screen.queryByText('Title is required')).toBeNull();
  expect(
    screen.queryByText('Title must be at least 3 characters long')
  ).toBeNull();
});
test('price validation works', async () => {
  render(<App />);

  await userEvent.click(screen.getByText('Add book'));
  expect(
    screen.getByText('Price must be different than 0')
  ).toBeInTheDocument();

  await userEvent.type(screen.getByLabelText('Enter price:'), '0');
  await userEvent.click(screen.getByText('Add book'));
  expect(
    screen.getByText('Price must be different than 0')
  ).toBeInTheDocument();

  await userEvent.clear(screen.getByLabelText('Enter price:'));
  await userEvent.type(screen.getByLabelText('Enter price:'), '-5');
  await userEvent.click(screen.getByText('Add book'));
  expect(
    screen.getByText('Price must be a positive number')
  ).toBeInTheDocument();

  await userEvent.clear(screen.getByLabelText('Enter price:'));
  await userEvent.type(screen.getByLabelText('Enter price:'), '5');
  await userEvent.click(screen.getByText('Add book'));
  expect(screen.queryByText('Price must be different than 0')).toBeNull();
});

test('add mock books', async () => {
  render(<App />);

  await userEvent.clear(screen.getByLabelText('Enter title:'));
  await userEvent.type(screen.getByLabelText('Enter title:'), 'Book 1');
  await userEvent.clear(screen.getByLabelText('Enter price:'));
  await userEvent.type(screen.getByLabelText('Enter price:'), '5');
  await userEvent.click(screen.getByText('Add book'));
  await userEvent.clear(screen.getByLabelText('Enter title:'));
  await userEvent.type(screen.getByLabelText('Enter title:'), 'Book 2');
  await userEvent.clear(screen.getByLabelText('Enter price:'));
  await userEvent.type(screen.getByLabelText('Enter price:'), '10');
  await userEvent.click(screen.getByText('Add book'));

  const rows = screen.getAllByRole('row');
  expect(rows).toHaveLength(3);

  expect(screen.getByText('Book 1')).toBeInTheDocument();
  expect(screen.getByText('5 zł')).toBeInTheDocument();
  expect(screen.getByText('Book 2')).toBeInTheDocument();
  expect(screen.getByText('10 zł')).toBeInTheDocument();
});
