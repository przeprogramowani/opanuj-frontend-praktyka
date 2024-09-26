export function formValidator(
  firstName: string,
  lastName: string,
  age: number
) {
  const errors: string[] = [];

  if (!firstName) {
    errors.push('First name is required');
  }
  if (firstName.length < 2) {
    errors.push('First name must be at least 2 characters long');
  }

  if (!lastName) {
    errors.push('Last name is required');
  }
  if (lastName.length < 2) {
    errors.push('Last name must be at least 2 characters long');
  }

  if (age < 0) {
    errors.push('Age must be a positive number');
  }
  if (isNaN(age)) {
    errors.push('Age must be a number');
  }

  return errors;
}
