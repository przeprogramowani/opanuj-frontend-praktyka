import {
  isEven,
  isGreaterThanZero,
  isLessThan100,
} from './validation/validation-methods';
import { validator } from './validation/validator';

validator([isGreaterThanZero, isLessThan100, isEven]);
