import { Book } from '../model/Book';

const Books = ({
  books,
  removeBook,
}: {
  books: Book[];
  removeBook: (id: number) => void;
}) => {
  const handleRemoveBook = (id: number) => {
    removeBook(id);
  };

  return (
    <div>
      {books.length === 0 ? (
        <h3>There are no books</h3>
      ) : (
        <table className="border-collapse shadow rounded-lg w-full">
          <thead>
            <tr>
              <th className="border border-slate-300 w-20 px-6 py-3 rounded-tl-lg">
                ID
              </th>
              <th className="border border-slate-300 w-96 px-6 py-3">Title</th>
              <th className="border border-slate-300 w-96 px-6 py-3 rounded-tr-lg">
                Price
              </th>
              <th className="border border-slate-300 w-20 px-6 py-3 rounded-tr-lg">
                Options
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book: Book, index: number) => (
              <tr
                key={book.id}
                className={index === books.length - 1 ? 'rounded-b-lg' : ''}
              >
                <td className="border border-slate-300 px-6 py-3">{book.id}</td>
                <td className="border border-slate-300 px-6 py-3">
                  {book.title}
                </td>
                <td className="border border-slate-300 px-6 py-3">
                  {book.price} zł
                </td>
                <td className="border border-slate-300 px-6 py-3">
                  <button
                    onClick={() => handleRemoveBook(book.id)}
                    className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs bg-red-500 text-white shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      <i className="fas fa-trash" aria-hidden="true"></i>
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Books;
