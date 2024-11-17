import { exec } from 'child_process';
import chalk from 'chalk';
import { handleShutdown, startServer } from './server.mjs';
import { findAvailablePort } from './utils.mjs';

async function main() {
  const args = process.argv.slice(2);
  const projectName = args[0];
  console.log(`🔍 Sprawdzam testy dla projektu: ${chalk.blue(projectName)}`);

  if (!projectName) {
    console.error(
      'Podaj nazwę projektu jako ostatni parametr (przykładowo: npm run verify solver).'
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
          console.info('Gratulacje, testy przeszły!');
          resolve();
        } else {
          reject(new Error(`Testy nie przeszły z kodem ${code}`));
        }
      });
    });
  } catch (error) {
    if (error.message.includes('Testy nie przeszły z kodem')) {
      console.error('Testy nie przeszły, popraw kod i spróbuj ponownie.');
      process.exit(0);
    } else {
      console.error('Błąd podczas uruchamiania serwera:', error);
      process.exit(1);
    }
  } finally {
    handleShutdown(serverProcess, viteServer);
  }
}

main();
