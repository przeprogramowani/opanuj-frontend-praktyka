export const isGreatherThan = (
  numberToCheck: number | undefined,
  minimumValue: number = 0
) => {
  return numberToCheck && numberToCheck > minimumValue;
};
