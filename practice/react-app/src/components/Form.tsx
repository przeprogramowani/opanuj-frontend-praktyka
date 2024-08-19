import React, { useState, useEffect } from 'react';
import { Book } from '../model/Book';

const Form = ({
  addBook,
  setError,
  error,
}: {
  addBook: (book: Book) => void;
  setError: (error: string[]) => void;
  error: string[];
}) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const validateForm = () => {
    const errors = [];
    if (title.length === 0) {
      errors.push('Title is required');
    }
    if (title.length < 3) {
      errors.push('Title must be at least 3 characters long');
    }
    if (+price < 0) {
      errors.push('Price must be a positive number');
    }
    if (+price === 0) {
      errors.push('Price must be different than 0');
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm();
    if (errors.length > 0) {
      setError(errors);
      return;
    }
    setError([]);
    addBook({
      id: Math.floor(Math.random() * 1000),
      title: title,
      price: +price,
    });
  };

  useEffect(() => {
    if (error.length === 0) {
      setTitle('');
      setPrice('');
    }
  }, [error]);

  return (
    <div className="col-span-1 p-5 mt-2 col-start-2 col-end-3">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Enter title:
          </label>
          <input
            id="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Enter price:
          </label>
          <input
            id="price"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add book
        </button>
      </form>
    </div>
  );
};

export default Form;
