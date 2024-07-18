import { ValidationRule } from './validation_rule';

export function validate(value: string, validators: ValidationRule[]) {
  const isValid = validators.every((validates) => validates(Number(value)));
  if (!isValid) return 'Invalid';
  return 'Valid';
}
