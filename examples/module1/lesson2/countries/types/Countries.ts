export interface Countries {
  id: number;
  name: CountriesName;
  flags: CountriesFlag;
  population: number;
}

interface CountriesName {
  common: string;
  official: string;
}
interface CountriesFlag {
  png: string;
  alt: string;
}
