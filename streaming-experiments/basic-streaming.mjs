import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY_PERSONAL,
});

const stream = await client.responses.create({
  model: "gpt-4o",
  input: 'Say "Sheep sleep deep" ten times fast!',
  stream: true,
});

for await (const event of stream) {
  if (event.type === "response.created") {
    console.log("START");
  }

  if (event.type === "response.output_text.delta") {
    process.stdout.write(event.delta);
  }

  if (event.type === "response.completed") {
    console.log("\n END");
  }
}
