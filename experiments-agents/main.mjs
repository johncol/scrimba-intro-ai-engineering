import OpenAI from "openai";
import {
  getCurrentWeatherTool,
  getLocationTool,
  callFunction,
} from "./tools.mjs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY_PERSONAL,
});

const MAX_ITERATIONS = 5;

const agent = async (query) => {
  const messages = [
    {
      role: "developer",
      content: `
        You are an assistant able to reply to user queries.
        Those queries may require the user specific information, like whether and location, in which case you'll call the corresponding functions to gather that data.
      `,
    },
    { role: "user", content: query },
  ];

  let iterations = 0;
  let response;

  while (
    response?.output?.[0]?.type !== "message" &&
    iterations < MAX_ITERATIONS
  ) {
    response = await openai.responses.create({
      model: "gpt-3.5-turbo",
      input: messages,
      max_output_tokens: 250,
      temperature: 0.9,
      tools: [getLocationTool, getCurrentWeatherTool],
    });

    if (response.output.length === 1 && response.output[0].type === "message") {
      const content = response.output_text;
      console.log(`Response received. Returning..`);
      return content;
    }

    const promises = response.output.map(async (output) => {
      const type = output.type;
      if (type !== "function_call") {
        throw new Error(`Unexpected output type. Type ${type}`);
      }

      const {
        call_id,
        name: functionName,
        arguments: functionArguments,
      } = output;

      const functionResult = await callFunction(
        functionName,
        functionArguments
      );
      console.log(`Function "${functionName}" invoked`);
      console.log(` Arguments ${functionArguments}`);
      console.log(` Result ${functionResult}`);

      return {
        type: "function_call_output",
        call_id,
        output: JSON.stringify(functionResult),
      };
    });
    const results = await Promise.all(promises);

    messages.push(...response.output);
    messages.push(...results);

    iterations++;
  }

  return `Unable to get a response after ${iterations} iterations`;
};

const response = await agent(`
    What's the forecast for the coming weekend in my city?
    Based on that, please suggest appropriate activities for me, my girlfriend and my two dogs.
`);

console.log("\n-----------------------");
console.log(response);
