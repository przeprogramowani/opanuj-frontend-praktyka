import {
  AGE_MUST_BE_NUMBER,
  FIRST_NAME_TOO_SHORT,
  LAST_NAME_TOO_SHORT,
  AGE_MUST_BE_POSITIVE
} from './errorMessages.consts.ts';

export function formValidator(
  firstName: string,
  lastName: string,
  age: number
) {
  const errors: string[] = [];

  // wiek musi być typu number
  if (typeof age !== 'number' || isNaN(age)) {
    throw new Error(AGE_MUST_BE_NUMBER);
  }

  // imię musi mieć co najmniej 1 znak
  if (firstName.trim().length < 1) {
    errors.push(FIRST_NAME_TOO_SHORT);
  }

  // nazwisko musi mieć co najmniej 1 znak
  if (lastName.trim().length < 1) {
    errors.push(LAST_NAME_TOO_SHORT);
  }

  // wiek nie może być mniejszy od 0
  if (age < 0) {
    errors.push(AGE_MUST_BE_POSITIVE);
  }

  return errors;
}
