export interface ICountry {
    name: {
        common: string;
    },
    capital: string[];
    flags: {
        svg: string;
    },
    currencies: {
        [key: string]: {
            name: string;
            symbol: string;
        }
    },
    languages: {
        [key: string]: string;
    },
    population: number;
}