import { describe, expect, test } from 'vitest';
import { formValidator } from './validator';
import {
  AGE_MUST_BE_POSITIVE,
  FIRST_NAME_TOO_SHORT,
  LAST_NAME_TOO_SHORT
} from './errorMessages.consts.ts';

describe('Form validation', () => {
  test('should return an error if age is not a number', () => {
    const invalidAgeValues = [true, false, undefined, null, 'abc', '2', NaN, {}, [],Symbol('symbol'), function() {}, new Date()];

    invalidAgeValues.forEach(age => {
      // @ts-ignore
      expect(() => formValidator('John', 'Doe', age)).toThrowError();
    });
  });

  test('should return an error if first name is too short', () => {
    const errors = formValidator('   ', 'Doe', 30);
    expect(errors).toContain(FIRST_NAME_TOO_SHORT);
  });

  test('should return an error if last name is too short', () => {
    const errors = formValidator('John', '  ', 30);
    expect(errors).toContain(LAST_NAME_TOO_SHORT);
  });

  test('should return an error if age is negative', () => {
    const errors = formValidator('John', 'Doe', -1);
    expect(errors).toContain(AGE_MUST_BE_POSITIVE);
  });

  test('correct data - should return empty errors array', () => {
    const errors = formValidator('Patryk', 'Pytlarczyk', 20);
    expect(errors).toHaveLength(0);
  });
});
