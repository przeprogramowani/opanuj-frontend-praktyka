import { describe, expect, test } from 'vitest';
import {
  ButtonTextColor,
  ColorAliasForeground1,
  ColorGlobalGrey14,
} from './dist/js/tokens';

describe('Design Tokens library output', () => {
  test('should have a color.global.grey.14 token', () => {
    expect(ColorGlobalGrey14).toBeDefined();
    expect(ColorGlobalGrey14).toBe('#242424');
  });

  test('should have a color.alias.foreground.1 token', () => {
    expect(ColorAliasForeground1).toBeDefined();
    expect(ColorAliasForeground1).toBe('#242424');
  });

  test('should have a button.text.color token', () => {
    expect(ButtonTextColor).toBeDefined();
    expect(ButtonTextColor).toBe('#242424');
  });
});
