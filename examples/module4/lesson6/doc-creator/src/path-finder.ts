import { glob } from 'glob';

export interface PathBuilderConfig {
  rootDir: string;
  patterns: string[];
  ignoreDirs: string[];
}

export async function buildPaths({ rootDir, patterns, ignoreDirs }: PathBuilderConfig) {
  const paths = await glob(patterns, {
    cwd: rootDir,
    absolute: true,
    ignore: {
      ignored: (p) => ignoreDirs.some((dirPart) => p.path.includes(dirPart)),
    },
  });
  return paths;
}
