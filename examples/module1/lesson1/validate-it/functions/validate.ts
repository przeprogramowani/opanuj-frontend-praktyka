import { Validator } from '../types/validator.ts';

export function validate(inputElement: HTMLInputElement,  validators: Validator[]): string{
  return validators.find((v) => !v.isValid(inputElement.value))?.text ?? "";
}