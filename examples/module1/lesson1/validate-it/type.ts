export type Rule = (value: number) => boolean;

export type ValidatorRules = Rule[];

export type ResultMessage = 'Valid' | 'Invalid';
