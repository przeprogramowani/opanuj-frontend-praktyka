export const validateEmptyNumbers = (...args: number[]) => args.every((arg) => !Number.isNaN(arg))
