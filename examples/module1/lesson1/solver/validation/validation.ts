import type { OperationType } from "../types";
import { MESSAGE_ERROR_DIVIDE_BY_ZERO } from "./messages";
import { isSomeNumberZero } from "./methods";


export const validate = (type: OperationType, a: number, b: number): string | null => {
  if (type === 'divide' && isSomeNumberZero(a, b)) {
    return MESSAGE_ERROR_DIVIDE_BY_ZERO;
  }
  return null;
};