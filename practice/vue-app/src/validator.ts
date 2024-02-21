export function validate(input: unknown) {
  const validators = [isNumber, isNonEmpty]
  return validators.every(validator => validator(input))
}

function isNumber(input: unknown) {
  return typeof input === 'number'
}

function isNonEmpty(input: unknown) {
  return input !== null && input !== undefined && input !== ''
}
