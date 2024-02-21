export const isSmallerThan = (
  numberToCheck: number | undefined,
  maximumValue: number = 100
) => {
  return numberToCheck && numberToCheck < maximumValue;
};
