import { handleShutdown, startServer } from './server.mjs';
import { findAvailablePort } from './utils.mjs';

async function main() {
  const args = process.argv.slice(2);
  const projectName = args[0];

  if (!projectName) {
    console.error('Please provide the project name.');
    process.exit(1);
  }

  const port = await findAvailablePort(3000);

  let serverProcess;
  let viteServer;

  try {
    const { serverProcess: sp, viteServer: vs } = await startServer(
      projectName,
      port
    );
    serverProcess = sp;
    viteServer = vs;

    // Register cleanup handlers
    process.on('SIGINT', () => handleShutdown(serverProcess, viteServer));
    process.on('SIGTERM', () => handleShutdown(serverProcess, viteServer));
  } catch (err) {
    console.error('Error when starting server:', err);
    process.exit(1);
  }
}

main();
