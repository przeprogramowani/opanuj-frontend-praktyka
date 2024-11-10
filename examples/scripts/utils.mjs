import { once } from 'events';
import net from 'net';

export function getRandomSubset(array) {
  const subsetSize = Math.floor(Math.random() * array.length) + 1;
  const shuffledArray = array.sort(() => Math.random() - 0.5);
  return shuffledArray.slice(0, subsetSize);
}

export async function findAvailablePort(startPort, maxPort = 4200) {
  let notStartPort = false;
  for (let port = startPort; port <= maxPort; port++) {
    try {
      await testPort(port);
      console.log(`
=================
|| ✅ SUCCESS  ||
=================
Found available port: ${port}
`);
      return port; // If we reach here, the port is available
    } catch (err) {
      notStartPort = true;
      continue;
    }
  }
  throw new Error('No available ports found');
}

async function testPort(port) {
  const server = net.createServer();
  try {
    server.listen(port);
    await once(server, 'listening');
    return port;
  } catch (err) {
    console.log(`🙈 Port ${port} is not available`);
    throw new Error(`Port ${port} is not available`);
  } finally {
    server.close();
  }
}

import { glob } from 'glob';

export async function getProjectPath(projectName) {
  const projectPaths = await glob(`./module*/*/${projectName}`);

  if (projectPaths.length !== 1) {
    throw new Error(
      `Nie znaleziono projektu lub istnieje wiele projektów o tej samej nazwie: ${JSON.stringify(
        projectPaths
      )}`
    );
  }

  return projectPaths[0];
}
