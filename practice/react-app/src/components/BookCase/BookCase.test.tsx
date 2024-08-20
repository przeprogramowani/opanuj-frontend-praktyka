import { render, screen, fireEvent } from '@testing-library/react';
import { BookCase } from './BookCase';

describe('BookCase', () => {
  const mockData = {
    title: 'Testowa książka',
    description: 'Opis testowej książki'
  };
  const mockRemoveBook = vi.fn();

  it('renderuje tytuł i opis książki', () => {
    render(<BookCase data={mockData} removeBook={mockRemoveBook} />);
    
    expect(screen.getByText(mockData.title)).toBeInTheDocument();
    expect(screen.getByText(`Opis: ${mockData.description}`)).toBeInTheDocument();
  });

  it('wywołuje funkcję removeBook po kliknięciu przycisku "Usuń"', () => {
    render(<BookCase data={mockData} removeBook={mockRemoveBook} />);
    
    const removeButton = screen.getByText('Usuń');
    fireEvent.click(removeButton);
    
    expect(mockRemoveBook).toHaveBeenCalledWith(mockData);
  });
});