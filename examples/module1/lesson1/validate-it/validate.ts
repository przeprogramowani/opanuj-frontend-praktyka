export function validate(
  value: number | string | undefined,
  methods: { (value: number): boolean }[]
): boolean {
  if (!value || Number.isNaN(Number(value))) {
    return false;
  }
  const valueAsNumber = Number(value);
  return methods.every((method) => method(valueAsNumber));
}
