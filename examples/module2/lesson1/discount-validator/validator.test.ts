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

    test('should retrun if all fields are valid', () => {
        const errors = formValidator('John', 'Doe', 30);
        expect(errors.length).toBe(0);
    });

    test('should return an error when lastName is too short', () => {
        const errors  = formValidator("Jan", "D", 30);
  
        expect(errors).toContain('Last name is to short');
    });

    test('should return an error when FirstName is too short', () => {
        const errors  = formValidator("J", "Doer ", 30);
  
        expect(errors).toContain('First name is to short');
    });

    test('should throw an error when age is not a number', () => {
        expect(() => formValidator("J", "Doer ", '30')).toThrowError();
    });
});