import OpenAI from 'openai';
import { createReadStream } from 'fs';
import { createPrompt } from './prompt';
import { OPENAI_MODEL_VERSION, VECTOR_STORE_ID } from './store-config';

const openai = new OpenAI();

export async function generateDocumentation(filePath: string, fileContent: string) {
  console.log('Calling OpenAI API...');

  const prompt = createPrompt(filePath, fileContent);

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: OPENAI_MODEL_VERSION,
  });

  return chatCompletion.choices[0].message.content!;
}

export async function uploadToStore(filePaths: string[]) {
  const fileStreams = filePaths.map((path) => createReadStream(path));

  console.log(`Uploading ${filePaths.length} files to the vector store...`);

  await openai.beta.vectorStores.fileBatches.uploadAndPoll(VECTOR_STORE_ID, { files: fileStreams });
}
