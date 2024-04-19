import 'dotenv/config';
import { readFileSync } from 'fs';
import { conductCodeReview } from './src/openai-client';
import { commentOnPullRequest } from './src/github-client';

const config = {
  openApiKey: process.env['OPENAI_API_KEY'],
  githubKey: process.env['GITHUB_TOKEN'],
  repoNameOwner: process.env['GITHUB_REPO_NAME_OWNER'],
  issueNo: parseInt(process.env['ISSUE_NUMBER'] as string),
};

async function main() {
  if (!config.openApiKey || !config.githubKey || !config.repoNameOwner) {
    throw new Error('Missing env variables. API keys & repo metadata must be provided.');
  }

  const diffContent = readFileSync('./diff.txt', 'utf-8');
  const modelResponse = await conductCodeReview(config.openApiKey, diffContent);

  await commentOnPullRequest({
    githubKey: config.githubKey,
    repoNameOwner: config.repoNameOwner,
    issueNo: config.issueNo,
    body: modelResponse,
  });
}

main();
