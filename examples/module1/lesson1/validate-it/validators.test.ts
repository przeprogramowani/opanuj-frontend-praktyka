import { describe, test, expect } from 'vitest';
import {
  isEven,
  isFilled,
  isGreatherThan,
  isInteger,
  isLessThan,
} from './validators';

describe('validators', () => {
  test('should check if given string value is filled', () => {
    expect(isFilled('')).toBeFalsy();
    expect(isFilled('2')).toBeTruthy();
  });

  test('should check if given value is integer', () => {
    expect(isInteger('2.5')).toBeFalsy();
    expect(isInteger('2')).toBeTruthy();
  });

  test('should check if given number is greather than min', () => {
    expect(isGreatherThan('1', 2)).toBeFalsy();
    expect(isGreatherThan('1', 1)).toBeFalsy();
    expect(isGreatherThan('1', 0)).toBeTruthy();
  });

  test('should check if given number is less than max', () => {
    expect(isLessThan('2', 1)).toBeFalsy();
    expect(isLessThan('1', 1)).toBeFalsy();
    expect(isLessThan('0', 1)).toBeTruthy();
  });

  test('should check if given number is even', () => {
    expect(isEven('1')).toBeFalsy();
    expect(isEven('2')).toBeTruthy();
  });
});
