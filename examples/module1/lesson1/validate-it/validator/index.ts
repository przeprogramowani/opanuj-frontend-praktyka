import { validationMethods } from './rules';

class Validator {
  constructor(input: HTMLElement, validateTrigger: HTMLElement, clearTrigger: HTMLElement, result: HTMLElement) {
    this.input = input;
    this.validateTrigger = validateTrigger;
    this.clearTrigger = clearTrigger;
    this.result = result;

    this.init();
  }

  private init() {
    this.validateTrigger?.addEventListener('click', () => this.getValidationResult());
    this.clearTrigger?.addEventListener('click', () => this.clear());
  }

  private validateNumber() {
    const inputValue = this.input.value;

    return validationMethods.map((element) => {
        const { result, output } = element(inputValue);
        
        return {
            result,
            output
        }
    });
  }

  private onValidationResult() {
    const validation = this.validateNumber();

    return validation.find(({ result }) => !result)?.output || 'Valid';
  }
  

private getValidationResult() {
    this.result.innerHTML = this.onValidationResult();
}

  private clear() {
    this.input.value = '';
    this.result.innerHTML = '';
  }
}

export default Validator;