// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Hints } from './Hints';

afterEach(cleanup);

describe('(Copilot) Hints', () => {
  it('renders without crashing', () => {
    render(<Hints />);
    const hintText = screen.getByTestId('hint-text');
    expect(hintText).toBeInTheDocument();
    expect(hintText).toHaveTextContent('');
  });

  it('displays the first hint when the button is clicked once', async () => {
    render(<Hints />);
    const showHintButton = screen.getByRole('button', {
      name: /Pokaż podpowiedź/i,
    });

    await userEvent.click(showHintButton);

    const hintText = screen.getByTestId('hint-text');
    expect(hintText).toHaveTextContent('Ogórek i Rick połączeni w jedno');
  });

  it('cycles through hints when the button is clicked multiple times', async () => {
    render(<Hints />);
    const showHintButton = screen.getByRole('button', {
      name: /Pokaż podpowiedź/i,
    });

    await userEvent.click(showHintButton);
    expect(screen.getByTestId('hint-text')).toHaveTextContent(
      'Ogórek i Rick połączeni w jedno'
    );

    await userEvent.click(showHintButton);
    expect(screen.getByTestId('hint-text')).toHaveTextContent(
      'Hasło to dwa słowa, drugie to imię'
    );

    await userEvent.click(showHintButton);
    expect(screen.getByTestId('hint-text')).toHaveTextContent(
      'Ogórek po angielsku to Pickle'
    );
  });

  it('cycles back to the first hint after the last one', async () => {
    render(<Hints />);
    const showHintButton = screen.getByRole('button', {
      name: /Pokaż podpowiedź/i,
    });

    // Cycle through all hints
    await userEvent.click(showHintButton);
    await userEvent.click(showHintButton);
    await userEvent.click(showHintButton);

    // One more click should cycle back to the first hint
    await userEvent.click(showHintButton);
    expect(screen.getByTestId('hint-text')).toHaveTextContent(
      'Ogórek i Rick połączeni w jedno'
    );
  });

  it('keeps showing the first hint after initial click if clicked again', async () => {
    render(<Hints />);
    const showHintButton = screen.getByRole('button', {
      name: /Pokaż podpowiedź/i,
    });

    await userEvent.click(showHintButton);
    expect(screen.getByTestId('hint-text')).toHaveTextContent(
      'Ogórek i Rick połączeni w jedno'
    );

    await userEvent.click(showHintButton);
    await userEvent.click(showHintButton);
    await userEvent.click(showHintButton);

    // Verify it cycles correctly
    await userEvent.click(showHintButton);
    expect(screen.getByTestId('hint-text')).toHaveTextContent(
      'Ogórek i Rick połączeni w jedno'
    );
  });
});

describe('(GPT-4) Hints - Edge Cases', () => {
  beforeEach(() => {
    render(<Hints />);
  });

  it('does not display any hint initially', () => {
    const hintText = screen.getByTestId('hint-text');
    expect(hintText).toHaveTextContent('');
  });

  it('cycles through all hints correctly even with rapid clicks', async () => {
    const showHintButton = screen.getByRole('button', {
      name: /Pokaż podpowiedź/i,
    });

    for (let i = 0; i < 6; i++) {
      await userEvent.click(showHintButton);
    }

    // After 6 clicks, it should have cycled back to the second hint
    expect(screen.getByTestId('hint-text')).toHaveTextContent(
      'Hasło to dwa słowa, drugie to imię'
    );
  });

  it('does not show any hint if button is not clicked', () => {
    const hintText = screen.getByTestId('hint-text');
    expect(hintText).toHaveTextContent('');
  });

  it('shows the correct hint after cycling through all and starting again', async () => {
    const showHintButton = screen.getByRole('button', {
      name: /Pokaż podpowiedź/i,
    });

    for (let i = 0; i < 9; i++) {
      await userEvent.click(showHintButton);
    }

    // After 9 clicks, it should cycle back to the first hint
    expect(screen.getByTestId('hint-text')).toHaveTextContent(
      'Ogórek i Rick połączeni w jedno'
    );
  });
});
