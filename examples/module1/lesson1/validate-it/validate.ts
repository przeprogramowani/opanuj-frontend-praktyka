export type ValueValidatorHandler = (value: unknown) => boolean;

export function validate(...validators: ValueValidatorHandler[]) {
  return (value: unknown) => {
    return validators.reduce((isValid, validator) => {
      return isValid && validator(value);
    }, true);
  };
}
