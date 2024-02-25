type Currencies = Record<string, { name: string; symbol: string }>;
type Languanges = Record<string, string>;

export type FlagData = Record<'flag' | 'alt', string>;

export type CountryType = {
  name: string;
  flagsData: FlagData;
  currencies: Currencies;
  languanges: Languanges;
  capital: string[];
  population: number;
};
