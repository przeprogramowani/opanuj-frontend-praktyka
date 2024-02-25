export interface CountryData {
  altSpellings?: string[]; // tablica alternatywnych nazw państwa
  area: number; // powierzchnia w km²
  borders?: string[]; // sąsiadziacye kraje (tablica ISO kodów)
  capital: string[] | string; // lista lub pojedyncza stolica
  capitalInfo?: { latlng: number[] }; // geograficzne współrzędne stolicy
  car: { signs: string[]; side: 'left' | 'right' }; // znaki i strona jazdy samochodowej
  cca2: string; // dwukrotny kod alfanumeryczny
  ccn3?: string; // trójznakowy kod numeryczny
  cioc: string; // kod identyfikacyjny Olimpijski Komitetu
  coatOfArms: { png: string; svg: string }; // herby w formacie pliku
  continents: string[]; // kontynenty
  currencies: Record<string, Currency>; // waluty jako obiekty
  demonyms: Record<string, { f: string; m: string }>; // imiona narodowe
  fifa: string; // kod FIFA
  flag: string; // kod flagi
  flags: { png: string; svg: string; alt: string }; // opis flagi
  gini: Record<string, number>; // GINI w danym roku
  idd: RootPrefix; // prefiks telefonów
  suffixes?: string[]; // sufiksy numerów telefonów
  independent: boolean; // niepodległość
  landlocked: boolean; // lądowisko
  languages: Record<string, string>; // języki jako obiekty
  latlng: number[]; // współrzędne geograficzne
  maps: MapLinks; // linki do map Google Maps i Open Street Map
  name: NameData; // nazwy państwa
  population: number; // liczba ludności
  postalCode: PostalCodeFormat; // format kodów pocztowych
  region: string; // rejon geograficzny
  startOfWeek: string; // pierwszy dzień tygodnia
  status: StatusType; // status oficjalnego przypisania
  subregion: string; // podregion geograficzny
  timezones: string[]; // strefy czasowe
  tld: string[]; // domeny internetowe
  translations: TranslationMap; // tłumaczenie nazw państwa
}

// Dodatkowy interfejs dla walut
interface Currency {
  code: string;
}

// Dodatkowy interfejs dla tłumaczeń
type TranslationMap = Record<string, { official: string; common: string }>;

// Dodatkowy interfejs dla formatów kodów pocztowych
interface PostalCodeFormat {
  format: string;
  regex: RegExp;
}

// Dodatkowy interfejs dla prefiksów telefonów
type RootPrefix = '+[0-9]{1}';

// Dodatkowy interfejs dla linków do map
interface MapLinks {
  googleMaps: string;
  openStreetMaps: string;
}

// Dodatkowy interfejs dla nazw państwa
interface NameData {
  common: string;
  official: string;
  nativeName: NativeName;
}

// Dodatkowy interfejs dla nazw w języku rodzinnym
interface NativeName {
  [languageCode: string]: string;
}

enum StatusType {
  officiallyAssigned = 'officially-assigned',
}
