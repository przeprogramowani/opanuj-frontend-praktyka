import express from 'express';
import bodyParser from 'body-parser';
import { getResource, addResource } from '../services/app-storage.mjs';

export const createDataMiddleware = () => {
  const router = express.Router();
  router.use(bodyParser.json());

  router.get('/batch', async (req, res) => {
    let resource = {};
    const resources = req.query.resources.split(',');
    const data = await Promise.all(resources.map((r) => readContent(r)));

    data.forEach((entry) => {
      const parsed = JSON.parse(entry);
      resource = {
        ...resource,
        ...parsed,
      };
    });

    return res.json(resource);
  });

  router.get('/:resource', async (req, res) => {
    const resource = await getResource(req.params.resource);
    return res.json(resource);
  });

  router.post('/:resource', async (req, res) => {
    const newResource = addResource(req.params.resource, req.body);
    return res.json(newResource);
  });

  return router;
};
