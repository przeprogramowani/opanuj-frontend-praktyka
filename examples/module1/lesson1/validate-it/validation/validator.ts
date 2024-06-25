import { MESSAGE_EMPTY_INPUT, MESSAGE_INVALID_RANGE, MESSAGE_VALID } from './messages';
const MIN_NUMBER = 0;
const MAX_NUMBER = 100;

export const validate = (value: string) => {
  if (!value) {
    return MESSAGE_EMPTY_INPUT;
  }

  const number = Number(value);

  if (number >= MIN_NUMBER && number <= MAX_NUMBER) {
    return MESSAGE_VALID(MIN_NUMBER, MAX_NUMBER);
  }

  return MESSAGE_INVALID_RANGE(MIN_NUMBER, MAX_NUMBER);
}
