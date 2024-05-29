type ValidateCondition = ((value: number) => boolean)[];

const verifyDOMContent = (elements: (HTMLElement | null)[]) => {
    return elements?.every(element => {
        if (!element) throw Error('Some required HTML Element are missing');
    });
};

export const validator = (validateConditions: ValidateCondition) => {
    const input = document.getElementById('input') as HTMLInputElement;
    const validateBtn = document.getElementById('validate-button');
    const clearBtn = document.getElementById('clear-button');
    const result = document.getElementById('result');

    verifyDOMContent([input, validateBtn, clearBtn, result]);

    const validateNumber = () => {
        const value = Number(input.value);
        const allValidateConditions = [
            (value: number) => value > 0,
            (value: number) => value < 100,
            ...validateConditions,
        ];
        const isValid = allValidateConditions.every(condition => condition(value));
        result!.innerHTML = isValid ? 'Valid' : 'Invalid';
    };

    const clearInput = () => {
        input.value = '';
        result!.innerHTML = '';
    };

    validateBtn!.addEventListener('click', validateNumber);
    clearBtn!.addEventListener('click', clearInput);
};
