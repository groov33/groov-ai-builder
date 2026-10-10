const { google } = require('@ai-sdk/google');
const { generateObject } = require('ai');
const { z } = require('zod');
const model = google('gemini-2.0-flash');

async function main() {
  try {
    const { object } = await generateObject({
      model,
      schema: z.object({ response: z.string() }),
      prompt: 'say hello',
    });
    console.log('Success:', object);
  } catch (err) {
    console.error('Error:', err.message);
  }
}
main();
