import { svelte } from '@sveltejs/vite-plugin-svelte';
import react from '@vitejs/plugin-react';
import { execSync } from 'child_process';
import express from 'express';
import { glob } from 'glob';
import { createServer as createHttpServer } from 'http';
import preprocess from 'svelte-preprocess';
import { createServer as createViteServer } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { findAvailablePort } from './utils.mjs';
import { configureExpressApp } from './vite-api.mjs';

const API_ROOT = 'http://localhost:3000/api/data';

async function startServer() {
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
    console.log('Angular project detected. Starting Angular dev server...');
    execSync('npm install', { stdio: 'inherit', cwd: projectPaths[0] });
    execSync('npm run start', { stdio: 'inherit', cwd: projectPaths[0] });
    return; // Exit the function as Angular will handle its own server
  }

  const app = express();
  const httpServer = createHttpServer(app);

  // Configure your Express app
  configureExpressApp(app);

  // Create Vite server
  const vite = await createViteServer({
    configFile: false,
    root: projectPaths[0],
    server: { middlewareMode: true },
    appType: 'spa',
    plugins: [
      react(),
      svelte({
        configFile: false,
        preprocess: [preprocess()],
      }),
      createHtmlPlugin({
        inject: {
          data: {
            ARTICLES_API: `${API_ROOT}/articles?timeout=3000`,
            AUTHORS_API: `${API_ROOT}/authors?timeout=5000`,
            COMMENTS_API: `${API_ROOT}/comments?timeout=2000`,
            BATCH_API: `${API_ROOT}/batch?resources=articles,authors,comments&timeout=5000`,
          },
        },
      }),
    ],
  });

  // Use Vite's connect instance as middleware
  app.use(vite.middlewares);

  // Start the server
  const desiredPort = 3000;
  const port = await findAvailablePort(desiredPort);

  httpServer.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

startServer().catch((err) => {
  console.error('Error starting server:', err);
  process.exit(1);
});
