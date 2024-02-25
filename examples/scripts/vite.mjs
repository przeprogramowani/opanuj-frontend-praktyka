import { createServer } from 'vite';
import { glob } from 'glob';
import { execSync } from 'child_process';
import express from 'express';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import { configureExpressApp } from './vite-api.mjs';

const projectName = process.argv.pop();
const projectPaths = await glob(`./module*/*/${projectName}`);

if (projectPaths.length !== 1) {
  throw new Error(
    `Project not found or multiple projects with the same name exist: ${JSON.stringify(
      projectPaths
    )}`
  );
}

if (projectPaths[0].includes('angular')) {
  execSync('npm install', { stdio: 'inherit', cwd: projectPaths[0] });
  execSync('npm run start', { stdio: 'inherit', cwd: projectPaths[0] });
} else {
  const server = await createServer({
    configFile: false,
    root: projectPaths[0],
    server: {
      port: 3000,
    },
    plugins: [
      react(),
      createHtmlPlugin({
        inject: {
          data: {
            ARTICLES_API:
              'http://localhost:3000/api/data/articles?timeout=3000',
            AUTHORS_API: 'http://localhost:3000/api/data/authors?timeout=5000',
            COMMENTS_API:
              'http://localhost:3000/api/data/comments?timeout=2000',
            BATCH_API:
              'http://localhost:3000/api/data/batch?resources=articles,authors,comments&timeout=5000',
          },
        },
      }),
      {
        name: 'express-plugin',
        configureServer(server) {
          const app = express();
          configureExpressApp(app);
          server.middlewares.use(app);
        },
      },
    ],
  });
  await server.listen();

  server.printUrls();
  server.bindCLIShortcuts({ print: true });
}
