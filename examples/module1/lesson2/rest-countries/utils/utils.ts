export function removeDuplicates<T>(array: T[]): T[] {
  return [...new Set(array)];
}

export function sortAlphabetically(a: string, b: string): number {
  return a.localeCompare(b);
}
