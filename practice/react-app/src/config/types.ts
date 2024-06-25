export interface CountryType {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Record<string, Currency>;
  idd: IDD;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Record<string, string>;
  translations: Record<string, Translation>;
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms?: Record<string, unknown>;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

interface Name {
  common: string;
  official: string;
  nativeName: Record<string, NativeName>;
}

interface NativeName {
  official: string;
  common: string;
}

interface Currency {
  name: string;
  symbol: string;
}

interface IDD {
  root: string;
  suffixes: string[];
}

interface Translation {
  official: string;
  common: string;
}

interface Demonyms {
  eng: Demonym;
}

interface Demonym {
  f: string;
  m: string;
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Car {
  signs: string[];
  side: string;
}

interface Flags {
  png: string;
  svg: string;
}

interface CapitalInfo {
  latlng: number[];
}

interface PostalCode {
  format: string;
  regex: string;
}

export interface Countries {
  countries: CountryType;
}

export interface FilterContextType {
  countryName: string;
  sortByPopulation: boolean;
  sortAlphabetically: boolean;
  setCountryName: React.Dispatch<React.SetStateAction<string>>;
  setSortByPopulation: React.Dispatch<React.SetStateAction<boolean>>;
  setSortAlphabetically: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface QuizCountry {
  name: string;
  flag: string;
}

export interface StartQuiz {
  countries: CountryType[];
  startOvert: boolean;
  setQuizCountries: React.Dispatch<React.SetStateAction<QuizCountry[]>>;
  setFirstRandomCountry: React.Dispatch<React.SetStateAction<QuizCountry>>;
}
