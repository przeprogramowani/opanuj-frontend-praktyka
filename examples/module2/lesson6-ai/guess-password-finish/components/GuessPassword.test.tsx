// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { GuessPassword } from './GuessPassword';

afterEach(cleanup);

describe('(Copilot) GuessPassword', () => {
  it('renders without crashing', () => {
    render(<GuessPassword />);
    const passwordInput = screen.getByPlaceholderText('Wpisz hasło...');
    expect(passwordInput).toBeInTheDocument();
  });

  it('displays error message when password is incorrect', async () => {
    render(<GuessPassword />);
    const passwordInput = screen.getByPlaceholderText('Wpisz hasło...');
    const submitButton = screen.getByText('Zgadnij');

    userEvent.type(passwordInput, 'wrong password');
    userEvent.click(submitButton);

    const errorMessage = await screen.findByText(
      'Niepoprawne hasło. Spróbuj ponownie lub skorzystaj z podpowiedzi.'
    );
    expect(errorMessage).toBeInTheDocument();
  });

  it('does not display error message when password is correct', async () => {
    render(<GuessPassword />);
    const passwordInput = screen.getByPlaceholderText('Wpisz hasło...');
    const submitButton = screen.getByText('Zgadnij');

    userEvent.type(passwordInput, 'pickle rick');
    userEvent.click(submitButton);

    const errorMessage = screen.queryByText(
      'Niepoprawne hasło. Spróbuj ponownie lub skorzystaj z podpowiedzi.'
    );
    expect(errorMessage).not.toBeInTheDocument();
  });

  it('displays error message when password is empty', async () => {
    render(<GuessPassword />);
    const passwordInput = screen.getByPlaceholderText('Wpisz hasło...');
    const submitButton = screen.getByText('Zgadnij');

    await userEvent.click(submitButton);

    const errorMessage = await screen.findByText(
      'Niepoprawne hasło. Spróbuj ponownie lub skorzystaj z podpowiedzi.'
    );
    expect(errorMessage).toBeInTheDocument();
  });

  // it('displays success message when password is correct', async () => {
  //   const { container } = render(<GuessPassword />);
  //   const passwordInput = screen.getByPlaceholderText('Wpisz hasło...');
  //   const submitButton = screen.getByText('Zgadnij');

  //   userEvent.type(passwordInput, 'pickle rick');
  //   await userEvent.click(submitButton);

  //   const successMessage = container.querySelector('alert');
  //   expect(successMessage).toBeInTheDocument();
  // });

  it('ignores case when checking password', async () => {
    render(<GuessPassword />);
    const passwordInput = screen.getByPlaceholderText('Wpisz hasło...');
    const submitButton = screen.getByText('Zgadnij');

    userEvent.type(passwordInput, 'PICKLE RICK');
    userEvent.click(submitButton);

    const errorMessage = screen.queryByText(
      'Niepoprawne hasło. Spróbuj ponownie lub skorzystaj z podpowiedzi.'
    );
    expect(errorMessage).not.toBeInTheDocument();
  });
});

vi.stubGlobal('alert', vi.fn());

describe('(GPT-4) GuessPassword', () => {
  beforeEach(() => {
    render(<GuessPassword />);
  });

  it('displays an error message for incorrect password', async () => {
    const passwordInput = screen.getByPlaceholderText(/wpisz hasło.../i);
    const submitButton = screen.getByRole('button', { name: /zgadnij/i });

    await userEvent.type(passwordInput, 'wrong password');
    await userEvent.click(submitButton);

    expect(screen.getByText(/niepoprawne hasło/i)).toBeInTheDocument();
  });

  it('does not display an error message when the input is correct', async () => {
    const correctPassword = 'pickle rick';
    const passwordInput = screen.getByPlaceholderText(/wpisz hasło.../i);
    const submitButton = screen.getByRole('button', { name: /zgadnij/i });

    await userEvent.type(passwordInput, correctPassword);
    await userEvent.click(submitButton);

    expect(screen.queryByText(/niepoprawne hasło/i)).toBeNull();
    expect(window.alert).toHaveBeenCalledWith('Brawo! Zgadłeś hasło.');
  });

  it('clears the error message after inputting correct password following a mistake', async () => {
    const passwordInput = screen.getByPlaceholderText(/wpisz hasło.../i);
    const submitButton = screen.getByRole('button', { name: /zgadnij/i });

    await userEvent.type(passwordInput, 'wrong');
    await userEvent.click(submitButton);
    expect(screen.getByText(/niepoprawne hasło/i)).toBeInTheDocument();

    await userEvent.clear(passwordInput);
    await userEvent.type(passwordInput, 'pickle rick');
    await userEvent.click(submitButton);

    expect(screen.queryByText(/niepoprawne hasło/i)).toBeNull();
    expect(window.alert).toHaveBeenCalledWith('Brawo! Zgadłeś hasło.');
  });

  it('initializes with an empty input field', () => {
    const passwordInput = screen.getByPlaceholderText(/wpisz hasło.../i);
    expect(passwordInput).toHaveValue('');
  });

  it('trims the password input before validation', async () => {
    const passwordInput = screen.getByPlaceholderText(/wpisz hasło.../i);
    const submitButton = screen.getByRole('button', { name: /zgadnij/i });

    await userEvent.type(passwordInput, '  pickle rick  ');
    await userEvent.click(submitButton);

    expect(window.alert).toHaveBeenCalledWith('Brawo! Zgadłeś hasło.');
  });

  it('validates the password case-insensitively', async () => {
    const passwordInput = screen.getByPlaceholderText(/wpisz hasło.../i);
    const submitButton = screen.getByRole('button', { name: /zgadnij/i });

    await userEvent.type(passwordInput, 'Pickle Rick');
    await userEvent.click(submitButton);

    expect(window.alert).toHaveBeenCalledWith('Brawo! Zgadłeś hasło.');
  });

  it('does not display an error message before any submission', async () => {
    const passwordInput = screen.getByPlaceholderText(/wpisz hasło.../i);

    await userEvent.type(passwordInput, 'wrong password');
    expect(screen.queryByText(/niepoprawne hasło/i)).toBeNull();
  });

  it('displays the error message only once despite multiple incorrect submissions', async () => {
    const passwordInput = screen.getByPlaceholderText(/wpisz hasło.../i);
    const submitButton = screen.getByRole('button', { name: /zgadnij/i });

    await userEvent.type(passwordInput, 'wrong password');
    await userEvent.click(submitButton);
    await userEvent.click(submitButton);

    expect(screen.queryAllByText(/niepoprawne hasło/i).length).toBe(1);
  });
});
