import { useState } from 'react'
import './App.css'
import { BookCase } from './components/BookCase/BookCase'

export interface Book {
  title: string,
  description: string
}

export const bookMocks = [
  {
    title: "Książka 1",
    description: "Opis książki 1"
  },
  {
    title: "Książka 2",
    description: "Opis książki 2"
  },
  {
    title: "Książka 3",
    description: "Opis książki 3"
  },
  {
    title: "Książka 4",
    description: "Opis książki 4"
  },
  {
    title: "Książka 5",
    description: "Opis książki 5"
  },
  {
    title: "Książka 6",
    description: "Opis książki 6"
  },
  {
    title: "Książka 7",
    description: "Opis książki 7"
  },
  {
    title: "Książka 8",
    description: "Opis książki 8"
  },
  {
    title: "Książka 9",
    description: "Opis książki 9"
  },

]

function App() {
  const [books, setBooks] = useState<Book[]>(bookMocks)

  const addNewBook = () => {
    const newBook = {
      title: `Książka`,
      description: `Opis książki`
    }
    setBooks([...books, newBook])
  }

  const removeBook = (book: Book) => {
    setBooks(books.filter(b => b.title !== book.title))
  }
  
  return (
    <>
    <div>
      <div className='book-case-list__header'>
      <h1>Lista książek </h1>
      <button onClick={addNewBook}>+</button>
      </div>
      <div className='book-case-list'>
       {books.map((book, index) => (
         <BookCase key={`${index}-book.title`} data={book} removeBook={removeBook} />
       ))}
       </div>
    </div>
    </>
  )
}

export default App
