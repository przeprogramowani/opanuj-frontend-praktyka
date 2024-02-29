import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function readContent(pathToResource) {
  let resource = '{}';

  try {
    resource = await readFile(
      join(__dirname, `../data/${pathToResource}.json`),
      'utf-8'
    );
  } catch (err) {
    console.log(`Could not read resource ${pathToResource}.json`, err);
  }

  return resource;
}

export const createDataMiddleware = () => {
  const router = express.Router();

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
    const resource = await readContent(req.params.resource);
    return res.json(JSON.parse(resource));
  });

  router.post('/:resource', async (req, res) => {
    return res.sendStatus(200);
  });

  return router;
};
