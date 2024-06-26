import {
  MESSAGE_EMPTY_INPUT,
  MESSAGE_GREATER_THAN_ZERO,
  MESSAGE_INTEGER_REQUIRED,
  MESSAGE_LESS_THAN_HUNDRED,
  MESSAGE_MUST_BE_EVEN,
} from '../vars/messages';

export const rules = [
  {
    test: (value: string) => value.trim() !== '',
    message: MESSAGE_EMPTY_INPUT,
  },
  {
    test: (value: string) =>
      !isNaN(Number(value)) && Number.isInteger(Number(value)),
    message: MESSAGE_INTEGER_REQUIRED,
  },
  {
    test: (value: string) => Number(value) > 0,
    message: MESSAGE_GREATER_THAN_ZERO,
  },
  {
    test: (value: string) => Number(value) < 100,
    message: MESSAGE_LESS_THAN_HUNDRED,
  },
  {
    test: (value: string) => Number(value) % 2 === 0,
    message: MESSAGE_MUST_BE_EVEN,
  },
];
