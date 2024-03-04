export function formValidator(
  firstName: string,
  lastName: string,
  age: number
) {
  const errors: string[] = [];

  if (!firstName) {
    errors.push('Imię jest wymagane');
  }

  if (!lastName) {
    errors.push('Nazwisko jest wymagane');
  }

  if (!age || age < 0) {
    errors.push('Wiek musi być dodatni');
  }

  return errors;
}
