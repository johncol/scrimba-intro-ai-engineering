import OpenAI from "openai";

const DEFAULT_HATEFUL_INPUT = "Hello, this is a default message/statement of my intent to harm society";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY_PERSONAL });

const userInput = process.argv[2] || DEFAULT_HATEFUL_INPUT;
console.log(`User input: ${userInput}`);

const { results } = await openai.moderations.create({
  model: "omni-moderation-2024-09-26",
  input: userInput,
});

const { flagged, categories } = results[0];
console.log(`Is input flagged: ${flagged}`);

if (flagged) {
  const flaggedCategories = Object.entries(categories)
    .filter(([, isFlagged]) => isFlagged)
    .map(([category]) => category)
    .join(", ");
  console.log(`Flagged categories: ${flaggedCategories}`);
}
