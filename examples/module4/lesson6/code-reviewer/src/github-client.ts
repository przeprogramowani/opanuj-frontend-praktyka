import { Octokit } from '@octokit/rest';

export interface CommentRequest {
  githubKey: string;
  repoNameOwner: string;
  issueNo: number;
  body: string;
}

export async function commentOnPullRequest(request: CommentRequest) {
  const octokit = new Octokit({
    auth: request.githubKey,
  });

  const [repoOwner, repoName] = request.repoNameOwner.split('/');

  console.log('Adding PullRequest comment...');

  await octokit.rest.issues.createComment({
    owner: repoOwner,
    repo: repoName,
    issue_number: request.issueNo,
    body: request.body,
  });
}
