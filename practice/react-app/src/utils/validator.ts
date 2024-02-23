const MIN = 0;
const MAX = 100;

export const CheckIsValid = (value: string) => {
  const val = parseFloat(value);
  if (val < MIN) return MIN;
  if (val > MAX) return MAX;
  return val;
};
