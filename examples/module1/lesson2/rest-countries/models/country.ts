export type Country = {
    name: {
        common: string;
    }
    flags: {
        png: string;
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
    capital: string[];
}