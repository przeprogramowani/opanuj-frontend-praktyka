import Anthropic from '@anthropic-ai/sdk';
import { createPrompt } from '../prompt';

const CLAUDE_MODEL_VERSION = 'claude-3-sonnet-20240229';

const anthropic = new Anthropic();

export async function generateDocumentation(filePath: string, fileContent: string) {
  console.log('Calling Anthropic API...');

  const prompt = createPrompt(filePath, fileContent);

  const chatCompletion = await anthropic.messages.create({
    model: CLAUDE_MODEL_VERSION,
    max_tokens: 2048,
    messages: [{ role: 'user', content: prompt }],
  });

  return chatCompletion.content[0].text;
}
