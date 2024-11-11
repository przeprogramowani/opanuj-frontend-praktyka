import { svelte } from '@sveltejs/vite-plugin-svelte';
import react from '@vitejs/plugin-react';
import { execSync, spawn } from 'child_process';
import express from 'express';
import { createServer as createHttpServer } from 'http';
import preprocess from 'svelte-preprocess';
import { createServer as createViteServer } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { getProjectPath } from './utils.mjs';
import { configureExpressApp } from './vite-api.mjs';

const API_ROOT = 'http://localhost:3000/api/data';

export async function startServer(projectName, port) {
  const projectPath = await getProjectPath(projectName);

  if (!projectPath.includes('angular')) {
    const app = express();
    const httpServer = createHttpServer(app);

    configureExpressApp(app);

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

    viteServer.middlewares.use((err, req, res, next) => {
      console.error('Vite middleware error:', err);
      next(err);
    });

    app.use(viteServer.middlewares);

    httpServer.listen(port, () => {
      console.log(`App is running on http://localhost:${port}`);
    });

    await waitForServer(port);

    return { serverProcess: httpServer, viteServer, projectPath, port };
  } else {
    execSync('npm install', { stdio: 'inherit', cwd: projectPath });
    const ngProcess = spawn('npm', ['run', 'start', '--', '--port', port], {
      cwd: projectPath,
      stdio: 'inherit',
    });

    await waitForServer(port);

    return { serverProcess: ngProcess, projectPath, port };
  }
}

export const handleShutdown = (serverProcess, viteServer) => {
  console.log('\nShutting down server...');
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

async function waitForServer(port, maxAttempts = 15) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const response = await fetch(`http://localhost:${port}`);
      if (response.ok) return true;
    } catch (e) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
  throw new Error('Server failed to start');
}
