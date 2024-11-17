const france = {
  name: { common: 'France' },
  flags: {
    png: 'https://flagcdn.com/w320/fr.png',
    alt: 'France flag',
  },
  population: 67391582,
  currencies: { EUR: { name: 'Euro' } },
};

const germany = {
  name: { common: 'Germany' },
  flags: {
    png: 'https://flagcdn.com/w320/de.png',
    alt: 'Germany flag',
  },
  population: 83240525,
  currencies: { EUR: { name: 'Euro' } },
};

const poland = {
  name: { common: 'Poland' },
  flags: {
    png: 'https://flagcdn.com/w320/pl.png',
    alt: 'Poland flag',
  },
  population: 37950802,
  currencies: { PLN: { name: 'Polish złoty' } },
};

export const mockCountriesData = {
  all: Array.from(
    { length: 50 },
    (_, index) => [poland, germany, france][index % 3]
  ),

  poland: [poland],

  euroCountries: [germany, france],
};
