import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY_PERSONAL,
});

export const generateNaturalLanguageResponse = async (context, query) => {
  const response = await openai.responses.create({
    model: "gpt-3.5-turbo",
    input: [
      {
        role: "developer",
        content: `
          You are an assistant that given some **context**, will generate a natural language response to a **query**.
          If the context is not relevant to the query, you should say I don't know or I don\'t have that information.
          It's very important that you don't make up information.
        `,
      },
      {
        role: "user",
        content: `
          **Context**: ${context}
          **Query**: ${query}
        `,
      }
    ],
  });

  return response.output_text;
};
