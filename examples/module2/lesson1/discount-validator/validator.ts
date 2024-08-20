export function formValidator(
  firstName: string,
  lastName: string,
  age: number
) {
  const errors: string[] = [];

  if (!firstName) {
    errors.push('First name is required');
  }

  if(firstName.length <= 1) {
    errors.push('First name is to short');
  }

  if(lastName.length <= 1) {
    errors.push('Last name is to short');
  }

  if (!lastName) {
    errors.push('Last name is required');
  }

  if (age < 0) {
    errors.push('Age must be a positive number');
  }

  if(typeof age!== 'number') {
   throw new Error('Age must be a number');
  }

  return errors;
}
