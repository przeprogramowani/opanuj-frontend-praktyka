import { INTEGER_VALIDATORS, isInteger } from './number-validation';

export function validateNumber(value: string): string {
  if (!isInteger(value)) {
    return 'Value is empty or is not an interger.';
  }
  const validationResults = INTEGER_VALIDATORS.map((validator) =>
    validator(+value)
  );
  const isValidNumber = validationResults.every((result) => result.isValid);

  if (isValidNumber) {
    return 'Valid integer.';
  }

  const violations = validationResults
    .map((result) => {
      if (result.isValid === false) {
        return result.violation;
      }
      return '';
    })
    .filter(Boolean);

  return `Invalid integer. Violations: ${violations.join(", ")}.`;
}
