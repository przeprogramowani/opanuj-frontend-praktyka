import { svelte } from '@sveltejs/vite-plugin-svelte';
import react from '@vitejs/plugin-react';
import chalk from 'chalk';
import { execSync } from 'child_process';
import crossSpawn from 'cross-spawn';
import express from 'express';
import { createServer as createHttpServer } from 'http';
import { sveltePreprocess } from 'svelte-preprocess';
import { createServer as createViteServer } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { getProjectPath } from './utils.mjs';
import { configureExpressApp } from './vite-api.mjs';

const API_ROOT = 'http://localhost:3000/api/data';

export async function startServer(projectName, port, debug = false) {
  const projectPath = await getProjectPath(projectName);

  if (!projectPath.includes('angular')) {
    const app = express();
    const httpServer = createHttpServer(app);

    if (debug) console.log('Configuring Express app...');
    configureExpressApp(app);

    if (debug) console.log('Creating Vite server...');
    const viteServer = await createViteServer({
      configFile: false,
      root: projectPath,
      server: { middlewareMode: true },
      watch: {
        usePolling: true,
        interval: 100,
      },
      hmr: {
        timeout: 30000,
      },
      host: '0.0.0.0',
      appType: 'spa',
      plugins: [
        react(),
        svelte({
          configFile: false,
          preprocess: [sveltePreprocess()],
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

    if (debug) console.log('Setting up error handling middleware...');
    viteServer.middlewares.use((err, req, res, next) => {
      if (debug) console.error('Vite middleware error details:', err.stack);
      console.error('Vite middleware error:', err);
      next(err);
    });

    app.use(viteServer.middlewares);

    if (debug) console.log(`Starting HTTP server on port ${port}...`);
    httpServer.listen(port);

    await waitForServer(port, 15, debug);

    return { serverProcess: httpServer, viteServer, projectPath, port };
  } else {
    if (debug) console.log('Installing Angular dependencies...');
    execSync('npm install', { stdio: 'inherit', cwd: projectPath });

    if (debug) console.log(`Starting Angular dev server on port ${port}...`);
    const ngProcess = crossSpawn(
      'npm',
      ['run', 'start', '--', '--port', port],
      {
        cwd: projectPath,
        stdio: 'inherit',
      }
    );

    await waitForServer(port, 15, debug);

    return { serverProcess: ngProcess, projectPath, port };
  }
}

export const handleShutdown = (serverProcess, viteServer) => {
  cleanup(serverProcess, viteServer);
  setTimeout(() => process.exit(0), 100);
};

function cleanup(serverProcess, viteServer) {
  if (viteServer) {
    viteServer.close().catch(console.error);
  }

  if (serverProcess) {
    try {
      // For Angular's ng serve process
      if (serverProcess.pid) {
        try {
          process.kill(serverProcess.pid);
        } catch (e) {
          serverProcess.kill('SIGTERM');
        }
      } else if (typeof serverProcess.kill === 'function') {
        serverProcess.kill('SIGTERM');
      } else if (typeof serverProcess.close === 'function') {
        serverProcess.close();
      }
    } catch (error) {
      console.error('Error during cleanup:', error);
    }
  }
}

async function waitForServer(port, maxAttempts = 15, debug = false) {
  if (debug) console.log(`Waiting for server to be ready on port ${port}...`);

  for (let i = 0; i < maxAttempts; i++) {
    if (debug) console.log(`Health check attempt ${i + 1}/${maxAttempts}...`);
    try {
      const response = await fetch(`http://localhost:${port}`);
      if (debug) {
        console.log(`Response status: ${response.status}`);
        console.log(`Response headers:`, Object.fromEntries(response.headers));
      }

      if (response.ok) {
        const appUrl = `http://localhost:${port}`;
        console.log(
          `🚀 Aplikacja uruchomiona i dostępna pod adresem: ${chalk.green(
            appUrl
          )}`
        );
        return true;
      } else {
        if (debug) {
          console.log(
            `Server responded with non-OK status: ${response.status}`
          );
          try {
            const text = await response.text();
            console.log('Response body:', text.substring(0, 500)); // First 500 chars to avoid console flood
          } catch (textError) {
            console.log('Could not read response body:', textError.message);
          }
        }
      }
    } catch (e) {
      if (debug) {
        console.log(`Health check failed with error: ${e.name}: ${e.message}`);
        console.log(`Error details:`, {
          code: e?.code,
          errno: e?.errno,
          syscall: e?.syscall,
          address: e?.address,
          port: e?.port,
        });
      }
    }
    if (debug) console.log('Waiting 1 second before next attempt...');
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  throw new Error(
    `Server didn't respond to healthcheck requests after ${maxAttempts} attempts`
  );
}
