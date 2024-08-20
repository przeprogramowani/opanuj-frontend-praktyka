
import { Book } from '../../App'
import './styles.css'


interface BookCase {
 data: Book;
 removeBook: (book: Book) => void
}


export const BookCase = ({data, removeBook}: BookCase) => {
  return (
    <div data-testid="book-case" className="book-case">
        <p className='book-case__title'>{data.title}</p>
        <p>Opis: {data.description}</p>
        <button className='book-case__remove-button' onClick={() => removeBook(data)}>Usuń</button>
    </div>
  )
}