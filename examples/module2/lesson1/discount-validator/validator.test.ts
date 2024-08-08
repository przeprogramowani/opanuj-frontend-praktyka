import { describe, expect, test } from 'vitest';
import { formValidator } from './validator';

describe('Form validation', () => {
  test('should return an error if first name is missing', () => {
    const errors = formValidator('', 'Doe', 30);
    expect(errors).toContain('First name is required');
  });

  test('should return an error if last name is missing', () => {
    const errors = formValidator('John', '', 30);
    expect(errors).toContain('Last name is required');
  });

  test('should return an error if age is negative', () => {
    const errors = formValidator('John', 'Doe', -1);
    expect(errors).toContain('Age must be a positive number');
  });

  test('shuld return no errors if all fields are valid', () => {
    const errors = formValidator('John', 'Doe', 30);
    expect(errors).toEqual([]);
  });

  test('shuld return error if firstName is less than 2 characters', () => {
    const errors = formValidator('J', 'Doe', 30);
    expect(errors).toContain('First name must be at least 2 characters long');
  });
  test('shuld return error if lastName is less than 2 characters', () => {
    const errors = formValidator('John;', 'D', 30);
    expect(errors).toContain('Last name must be at least 2 characters long');
  });
  test('shuld return error if age is not a number', () => {
    const errors = formValidator('John', 'Doe', NaN);
    expect(errors).toContain('Age must be a number');
  });
});
