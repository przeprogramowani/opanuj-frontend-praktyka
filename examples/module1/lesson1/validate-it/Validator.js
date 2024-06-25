export class Validator {
  constructor({ rules }) {
    this.rules = rules;
  }

  validate(input) {
    let isValid = true;

    this.rules.forEach((validateRule) => {
      if (!validateRule(input)) {
        isValid = false;
      }
    });

    return isValid;
  }
}
