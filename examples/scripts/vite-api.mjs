import { timeoutMiddleware } from './middlewares/timeout-middleware.mjs';
import { createDataMiddleware } from './middlewares/data-middleware.mjs';

export const configureExpressApp = (app) => {
  app.use(timeoutMiddleware);
  app.use('/api/data', createDataMiddleware());
};
