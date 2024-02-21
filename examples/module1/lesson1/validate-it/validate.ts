export const validate = (
  value: number | undefined,
  validateMethods: ((value: number | undefined) => boolean | 0 | undefined)[]
) => {
  return validateMethods.every((method) => method(value));
};
