import express from 'express';
import cors from 'cors';
import { timeoutMiddleware } from './middlewares/timeout-middleware.mjs';
import { createDataMiddleware } from './middlewares/data-middleware.mjs';
import { forceErrorMiddleware } from './middlewares/force-error-middleware.mjs';
import { createWeatherMiddleware } from './middlewares/weather-middleware.mjs';


export const configureExpressApp = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(forceErrorMiddleware);
  app.use(timeoutMiddleware);
  app.use('/api/data', createDataMiddleware());
  app.use('/api/weather', createWeatherMiddleware());
};
