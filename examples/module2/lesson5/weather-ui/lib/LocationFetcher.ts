import axios from 'axios';
import { LocationWeather } from '../models/LocationWeather';
import { parseLocation } from './LocationParser';
import { WeatherRequest } from '../models/WeatherRequest';

async function getWeatherData(
  request: WeatherRequest
): Promise<LocationWeather> {
  const { data } = await axios.get<LocationWeather>(
    `/api/weather?city=${request.city}&country=${request.country}`
  );

  return data;
}

export async function fetchWeather(
  locationQuery: string
): Promise<LocationWeather | null> {
  const request = parseLocation(locationQuery);

  if (!request) {
    return null;
  }

  try {
    return await getWeatherData({
      city: request.city,
      country: request.country,
    });
  } catch {
    throw new Error(
      `Cannot fetch weather data for provided location: ${request.city}, ${request.country}`
    );
  }
}
