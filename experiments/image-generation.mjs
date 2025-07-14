import OpenAI from 'openai';
import readline from 'readline';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY_PERSONAL,
});

// Leonel Messi dribbling a soccer ball against Cristiano Ronaldo in Japanese street

const KEY_INSTRUCTIONS = `
In the next section titled "Image Details", you are going to find the details of an image to generate.
The style of the image is going to be anime-like, just like Rurouni Kenshin. So If in the details section you find any references to the style of the image that will conflict with Rurouni Kenshin, you should ignore them.

# Image Details

<image_details>
{imageDetails}
</image_details>
`;

const getImageGenerationPrompt = async () => {
  const terminalInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const imageDetails = await new Promise((resolve) => {
    terminalInput.question("Enter the image details: ", (answer) => {
      resolve(answer);
    });
  });
  
  terminalInput.close();

  return KEY_INSTRUCTIONS.replace("{imageDetails}", imageDetails)
};

const prompt = await getImageGenerationPrompt();

const response = await openai.images.generate({
  model: 'gpt-image-1',
  n: 1,
  size: '1024x1024',
  prompt,
})

const imageUrl = response.data[0].url;
console.log(imageUrl);
