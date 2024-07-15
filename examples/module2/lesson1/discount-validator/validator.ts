export function formValidator(
  firstName: string,
  lastName: string,
  age: any
) {
  const errors: string[] = [];

  if (firstName.length < 1)
    errors.push('First name must have at least one character');


  if (lastName.length < 1)
    errors.push('Last name must have at least one character');


  if (typeof age !== 'number' || isNaN(age))
    throw new Error('Age must be a number');


  if (age < 0)
    errors.push('Age must be a positive number');


  return errors;
}
