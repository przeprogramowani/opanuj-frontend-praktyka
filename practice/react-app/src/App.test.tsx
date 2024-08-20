import { render, screen, fireEvent } from '@testing-library/react';
import App, { bookMocks } from './App';

describe('App', () => {
    it('render App', () => {
        render(<App />)

        const bookCaseElements = screen.getAllByTestId('book-case');

        expect(bookCaseElements.length).toBe(bookMocks.length);
    })

    it('dodaje  nową książkę', () => {
        render(<App />)

        const initbookCaseElements = screen.getAllByTestId('book-case');
        const initCount = initbookCaseElements.length;

        const addButton = screen.getByText('+');
        fireEvent.click(addButton);

        const updatedBookCaseElements = screen.getAllByTestId('book-case');
        expect(updatedBookCaseElements.length).toBe(initCount + 1);
    });
});