import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="bg-white p-4 rounded-md">
          <h2 className="font-bold text-xl mb-2">App v1</h2>
          <ul className="list-disc pl-4">
            <li>Blokujące zapytanie o konfigurację</li>
            <li>Wolne zapytanie o dane</li>
            <li>Brak feedbacku do użytkownika</li>
            <li>Blokujący formularz</li>
          </ul>
          <Link className="text-blue-500" to="/v1">
            Otwórz
          </Link>
        </div>
        <div className="bg-white p-4 rounded-md">
          <h2 className="font-bold text-xl mb-2">App v2</h2>
          <ul className="list-disc pl-4">
            <li>Konfiguracja renderowana server-side</li>
            <li>Nowa struktura komponentów</li>
            <li>Niezależne zapytania o dane</li>
          </ul>
          <Link className="text-blue-500" to="/v2">
            Otwórz
          </Link>
        </div>
        <div className="bg-white p-4 rounded-md">
          <h2 className="font-bold text-xl mb-2">App v3</h2>
          <ul className="list-disc pl-4">
            <li>Placeholdery na czas ładowania danych</li>
            <li>Optymistyczne zapisywanie komentarzy</li>
            <li>Optymalizacja rozmiaru obrazków</li>
            <li>React Query - unikanie zduplikowanych zapytań</li>
          </ul>
          <Link className="text-blue-500" to="/v3">
            Otwórz
          </Link>
        </div>
      </div>
    </>
  );
}
