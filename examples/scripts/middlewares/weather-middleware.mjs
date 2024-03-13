import express from 'express';
import { readContent } from './data-middleware.mjs';

export const createWeatherMiddleware = () => {
  const router = express.Router();

  router.get('/', async (req, res) => {
    const { city, country } = req.query;

    if (!city || !country) {
      res.status(400).send('City and country are required');
      return;
    }

    const weather = await readContent('weather');
    const jsonWeather = JSON.parse(weather);

    try {
      return res.json({
        city,
        country,
        weatherDetails: jsonWeather[country][city],
      });
    } catch {
      res.status(404).send('City not found');
    }
  });

  return router;
};
