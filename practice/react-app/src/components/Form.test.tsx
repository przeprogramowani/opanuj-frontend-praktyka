// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import { test, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import Form from './Form';
import { Book } from '../model/Book';

afterEach(cleanup);

test('default controls are displayed', async () => {
  const addBook = (book: Book) => {
    [book.id, book.title, book.price];
  };
  const setError = (error: string[]) => {
    [error];
  };
  const error: string[] = [];

  render(<Form addBook={addBook} setError={setError} error={error} />);

  expect(screen.getByLabelText('Enter title:')).toBeInTheDocument();
  expect(screen.getByLabelText('Enter price:')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Add book' })).toBeInTheDocument();
});
