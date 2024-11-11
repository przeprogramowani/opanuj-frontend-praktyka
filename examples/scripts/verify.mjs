import { exec } from 'child_process';
import { handleShutdown, startServer } from './server.mjs';
import { findAvailablePort } from './utils.mjs';

async function main() {
  const args = process.argv.slice(2);
  const projectName = args[0];

  if (!projectName) {
    console.error(
      'Please provide the project name (example: npm run verify solver).'
    );
    process.exit(1);
  }

  const port = await findAvailablePort(3000);

  let serverProcess;
  let viteServer;

  try {
    const {
      serverProcess: sp,
      projectPath,
      viteServer: vs,
    } = await startServer(projectName, port);
    serverProcess = sp;
    viteServer = vs;

    process.env.BASE_URL = `http://localhost:${port}`;
    process.env.PROJECT_DIR = projectPath;

    process.on('SIGINT', () => handleShutdown(serverProcess, viteServer));
    process.on('SIGTERM', () => handleShutdown(serverProcess, viteServer));

    await new Promise((resolve, reject) => {
      const testProcess = exec(
        'npx playwright install && npx playwright test --config=./scripts/playwright-verify.config.ts',
        {
          stdio: ['inherit', 'pipe', 'pipe'],
          env: { ...process.env, FORCE_COLOR: true },
        }
      );

      testProcess.stdout?.on('data', (data) => {
        if (
          !data.includes('trace (application/zip)') &&
          !data.match(/\d+ failed|\d+ passed/)
        ) {
          process.stdout.write(data);
        }
      });

      testProcess.stderr?.on('data', (data) => {
        process.stderr.write(data);
      });

      testProcess.on('exit', (code) => {
        if (code === 0) {
          console.info('Congrats, tests have passed!');
          resolve();
        } else {
          reject(new Error(`Tests failed with code ${code}`));
        }
      });
    });
  } catch (error) {
    if (error.message.includes('Tests failed with code')) {
      console.error('Tests failed, please adjust your code and try again.');
      process.exit(0);
    } else {
      console.error('Error when starting verification server:', error);
      process.exit(1);
    }
  } finally {
    handleShutdown(serverProcess, viteServer);
  }
}

main();
