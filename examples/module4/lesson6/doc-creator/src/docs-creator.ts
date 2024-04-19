import { mkdirSync, writeFileSync, readFileSync } from 'fs';
import { join, relative, dirname, basename, extname } from 'path';
import { generateDocumentation } from './openai-client/openai-utils';

export async function recreateDocs(rootDir: string, paths: string[]) {
  const docsPath = join(rootDir, 'docs');

  const docFileNames = [];

  for (const path of paths) {
    const dirPath = dirname(path);
    const markdownFilePath = relative(rootDir, dirPath);
    const docDirPlaceholder = join(docsPath, markdownFilePath);

    mkdirSync(docDirPlaceholder, { recursive: true });

    console.log(`Generating documentation for ${path}...`);
    const content = readFileSync(path, 'utf-8');
    const docsContent = await generateDocumentation(path, content);

    const mdPath = `${join(docDirPlaceholder, basename(path, extname(path)))}.md`;
    docFileNames.push(mdPath);
    writeFileSync(mdPath, docsContent);
  }

  return docFileNames;
}
