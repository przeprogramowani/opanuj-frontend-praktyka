import express from 'express';
import { getFromFileSystem } from '../services/app-storage.mjs';

export const createWeatherMiddleware = () => {
  const router = express.Router();

  router.get('/', async (req, res) => {
    const { city, country } = req.query;

    if (!city || !country) {
      res.status(400).send('City and country are required');
      return;
    }

    const jsonWeather = await getFromFileSystem('weather');

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
