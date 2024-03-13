import { WeatherRequest } from '../models/WeatherRequest';

export function parseLocation(locationQuery: string): WeatherRequest | null {
  const [city, country] = locationQuery.trim().split(',');

  if (!city || !country) {
    return null;
  }

  return { city: city.trim(), country: country.trim() };
}
