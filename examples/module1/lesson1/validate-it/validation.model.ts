export type ValidationResultPositive = {
  isValid: true;
};
export type ValidationResultNegative = {
  isValid: false;
  violation: string;
};

export type ValidationResult =
  | ValidationResultPositive
  | ValidationResultNegative;
