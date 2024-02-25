export type SortCountryOptions =
  | 'countryName'
  | 'currency'
  | 'capital'
  | 'language';

// export type SortOptionValue = {
//   countryName: string;
//   currency: string;
//   capital: string;
//   language: string;
// };

export type SortDataType<T> = {
  countries: T[] | undefined;
  sortOption: SortCountryOptions;
};
