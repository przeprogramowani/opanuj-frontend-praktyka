// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import { test, expect, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Book } from '../model/Book';
import Books from './Books';

afterEach(cleanup);

test('removes a book when delete button is clicked', async () => {
  const mockRemoveBook = vi.fn();
  const mockBooks: Book[] = [
    { id: 1, title: 'Book 1', price: 5 },
    { id: 2, title: 'Book 2', price: 10 },
  ];

  const { rerender } = render(
    <Books books={mockBooks} removeBook={mockRemoveBook} />
  );

  expect(screen.getByText('Book 1')).toBeInTheDocument();
  expect(screen.getByText('Book 2')).toBeInTheDocument();

  const deleteButtons = screen.getAllByRole('button');
  await userEvent.click(deleteButtons[0]);

  expect(mockRemoveBook).toHaveBeenCalledWith(1);

  const updatedBooks = mockBooks.filter((book) => book.id !== 1);
  rerender(<Books books={updatedBooks} removeBook={mockRemoveBook} />);

  expect(screen.queryByText('Book 1')).toBeNull();
  expect(screen.getByText('Book 2')).toBeInTheDocument();
});
