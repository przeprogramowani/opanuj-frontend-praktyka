export interface Country {
  name: {
    common: string;
    official: string;
    nativeName?: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  capital?: string[];
  currencies?: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages?: {
    [key: string]: string;
  };
  population?: number;
  flags?: {
    png: string;
    svg: string;
  };
}

export type FilterType = 'name' | 'currency' | 'language' | 'capital';
export type SortOrder = 'alphabetical' | 'population';
