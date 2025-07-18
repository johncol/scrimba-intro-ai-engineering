import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY_PERSONAL,
});

const timeStart = Date.now();
const response = await openai.images.generate({
  model: 'dall-e-3',
  n: 1,
  size: '1792x1024',
  response_format: 'url',
  quality: 'hd',
  prompt: `
    A painter in the beach painting a sunrise. You can see the ocean in the background.
    There are two dogs looking at the sunrise, each one to each side of the painter.
    The style of the painting is impressionist.
    The style of the image is cyberpunk.
  `,
  
})
const timeEnd = Date.now();
console.log(`Time taken: ${((timeEnd - timeStart) / 1000).toFixed(2)}s`);

console.log("Response:");
console.log(response);
