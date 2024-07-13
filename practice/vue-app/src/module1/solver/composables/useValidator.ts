import { Ref } from 'vue';

export const useValidator = (valResult: Ref<{[key: string]: string}>) => {

  const isNumber = (value: any): { status: 'failed', message: string } | { status: 'passed' } => {
    if (typeof value !== 'number') {
      return { status: 'failed', message: 'Provide number' };
    }
    return { status: 'passed' };
  };

  const handleValidation = (val: number, idx: string) => {
    const validationFn = [isNumber];
    valResult.value[idx] = validationFn.map(fn => fn(val)).map(result => result.status === 'failed' ? result.message : '').filter(message => message).join(' ');
  };
  return {
    handleValidation
  }
}
