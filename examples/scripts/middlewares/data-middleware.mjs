import { readFile, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const __dirname = dirname(fileURLToPath(import.meta.url));

export async function readContent(pathToResource) {
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

async function writeContent(pathToResource, data) {
  try {
    await writeFile(
      join(__dirname, `../data/${pathToResource}.json`),
      JSON.stringify(data, null, 2),
      'utf-8'
    );
  } catch (err) {
    console.log(`Could not write to resource ${pathToResource}.json`, err);
    throw err;
  }
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
    const resourceName = req.params.resource;
    try {
      const existingContent = await readContent(resourceName);
      const existingData = JSON.parse(existingContent);

      if (!existingData[resourceName]) {
        existingData[resourceName] = [];
      }

      const newId = existingData[resourceName].length > 0 ? Math.max(...existingData[resourceName].map(item => item.id)) + 1 : 1;

      const newItem = {
        id: newId,
        ...req.body,
      };
      existingData[resourceName].push(newItem);

      await writeContent(resourceName, existingData);

      res.status(201).json(newItem);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });

  return router;
};
