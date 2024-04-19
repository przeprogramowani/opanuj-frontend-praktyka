import 'dotenv/config';
import { join } from 'path';
import { patterns, ignoreDirs } from './config.json';
import { buildPaths } from './src/path-finder';
import { uploadToStore } from './src/openai-client/openai-utils';
import { recreateDocs } from './src/docs-creator';

const config = {
  rootDir: join(__dirname, process.env['PROJECT_ROOT']!),
};

async function main() {
  if (!process.env['OPENAI_API_KEY']) {
    throw new Error('Missing env variables. API key must be provided.');
  }

  const paths = await buildPaths({
    rootDir: config.rootDir,
    patterns,
    ignoreDirs,
  });

  const docPaths = await recreateDocs(config.rootDir, paths);

  await uploadToStore(docPaths);
}

main();
