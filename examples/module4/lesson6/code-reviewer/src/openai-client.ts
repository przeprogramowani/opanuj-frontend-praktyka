import OpenAI from 'openai';

const OPENAI_MODEL_VERSION = 'gpt-4-turbo-2024-04-09';

export async function conductCodeReview(apiKey: string, diff: string) {
  const openaiClient = new OpenAI({
    apiKey,
  });

  const prompt = `
    Conduct Code Review of the following git diff enclosed with <GIT_DIFF></<GIT_DIFF> tags.

    Follow these rules:
    1. Do not comment on configuration files.
    2. Do not comment on YML files.
    3. Do not comment on the third-party library code.
    4. When suggesting code improvements, use Markdown.
    5. Adjust the volume of comments based on the size of the diff.

    <GIT_DIFF>
    ${diff}
    </GIT_DIFF>
  `;

  console.log('Calling GPT-4...');

  const chatCompletion = await openaiClient.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: OPENAI_MODEL_VERSION,
  });

  return chatCompletion.choices[0].message.content!;
}
