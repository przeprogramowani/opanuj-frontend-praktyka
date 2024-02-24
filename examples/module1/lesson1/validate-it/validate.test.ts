import { describe, test, expect } from 'vitest';
import { validate, ValueValidatorHandler } from './validate';

describe('validate', () => {
  test('should iterate over validators and return chained result of validations', () => {
    expect(validate(...(<ValueValidatorHandler[]>[]))(undefined)).toBeTruthy();

    expect(
      validate(
        () => true,
        () => false
      )(undefined)
    ).toBeFalsy();

    expect(
      validate(
        () => true,
        () => true
      )(undefined)
    ).toBeTruthy();
  });
});
