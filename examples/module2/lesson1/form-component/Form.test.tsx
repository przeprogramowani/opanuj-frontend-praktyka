// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import { test, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

afterEach(cleanup);

test('default controls are displayed', async () => {
  render(<Form />);

  expect(screen.getByLabelText('Imię')).toBeInTheDocument();
  expect(screen.getByLabelText('Nazwisko')).toBeInTheDocument();
  expect(screen.getByLabelText('Wiek')).toBeInTheDocument();

  expect(screen.getByText('Zapisz')).toBeInTheDocument();
});

test('first name validation works', async () => {
  render(<Form />);

  await userEvent.click(screen.getByText('Zapisz'));
  expect(screen.getByText('Imię jest wymagane')).toBeInTheDocument();

  await userEvent.type(screen.getByLabelText('Imię'), 'Jan');
  await userEvent.click(screen.getByText('Zapisz'));

  expect(screen.queryByText('Imię jest wymagane')).toBeNull();
});
