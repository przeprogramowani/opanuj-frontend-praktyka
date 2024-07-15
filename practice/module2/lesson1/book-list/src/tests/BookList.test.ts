import { render, fireEvent } from '@testing-library/vue';
import BookList from '@/components/BookList.vue';

test('renders book list component', async () => {
  const { getByPlaceholderText, getByText, getByRole, queryByText } = render(BookList);

  const input = getByPlaceholderText('Add a new book');
  const addButton = getByRole('button', { name: /add book/i });

  // Verify initial state
  expect(queryByText('Remove')).not.toBeInTheDocument();

  // Add a new book
  await fireEvent.update(input, 'The Great Gatsby');
  await fireEvent.click(addButton);

  // Verify the book is added
  expect(getByText('The Great Gatsby')).toBeInTheDocument();
  expect(getByText('Remove')).toBeInTheDocument();

  // Remove the book
  const removeButton = getByText('Remove');
  await fireEvent.click(removeButton);

  // Verify the book is removed
  expect(queryByText('The Great Gatsby')).not.toBeInTheDocument();
});
