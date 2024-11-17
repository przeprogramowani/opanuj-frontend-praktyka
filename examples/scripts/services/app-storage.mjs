import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const storage = {
  articles: [],
  authors: [],
  comments: [],
  items: [],
  users: [],
};

export async function getFromFileSystem(resourceName) {
  let resource = '{}';

  try {
    resource = await readFile(
      join(__dirname, `../data/${resourceName}.json`),
      'utf-8'
    );
  } catch (err) {
    console.log(`Could not read resource ${resourceName}.json`, err);
  }

  return JSON.parse(resource);
}

export async function getResource(resourceName) {
  if (!storage[resourceName] || storage[resourceName].length === 0) {
    const resource = await getFromFileSystem(resourceName);
    storage[resourceName] = resource[resourceName];
  }

  return storage[resourceName];
}

export function addResource(resourceName, resource) {
  const newResource = {
    id: new Date().getTime(),
    ...resource,
  };
  console.log(`Adding new entry to ${resourceName}`, newResource);

  storage[resourceName].push(newResource);
  return newResource;
}
