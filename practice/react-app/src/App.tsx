import { useState } from 'react';
import Books from './components/Books';
import { Book } from './model/Book';
import Error from './components/Error';
import Form from './components/Form';

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const [error, setError] = useState<string[]>([]);

  const addBook = (book: Book) => {
    setBooks([
      ...books,
      {
        id: book.id,
        title: book.title,
        price: book.price,
      },
    ]);
  };
  const removeBook = (bookId: number) => {
    setBooks(books.filter((book) => book.id !== bookId));
  };

  return (
    <div className="p-10 m-10">
      <Books books={books} removeBook={removeBook} />
      <Form addBook={addBook} setError={setError} error={error} />
      <Error error={error} />
    </div>
  );
}

export default App;
