import { Route } from '@playwright/test';
import { mockCountriesData } from './countriesData';

export async function handleCountriesRoute(route: Route) {
  const url = route.request().url();
  let responseBody;

  if (url.includes('/all')) {
    responseBody = mockCountriesData.all;
  } else if (url.includes('/name/poland')) {
    responseBody = mockCountriesData.poland;
  } else if (url.includes('/currency/EUR')) {
    responseBody = mockCountriesData.euroCountries;
  }

  await route.fulfill({
    status: 200,
    body: JSON.stringify(responseBody),
  });
}
