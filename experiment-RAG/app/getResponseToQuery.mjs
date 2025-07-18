import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY_PERSONAL,
});

export const getResponseToQuery = async (query = "", embeddings = []) => {
  const context = embeddings.map((embedding) => embedding.content).join("/n");

  const response = await openai.responses.create({
    model: "gpt-3.5-turbo",
    input: [
      {
        role: "developer",
        content: `
          You are an enthusiastic movie expert who loves recommending movies to people.
          You will be given two pieces of information - some context about movies and a query.
          Your main job is to formulate a short answer to the question using the provided context.
          If the answer is not given in the context, or you are unsure and cannot find the answer, say, that you don't know the answer.
          Additional reqs:
           1. Please do not make up the answer.
           2. No need to include comments like "Based on the context provided" or similar
           3. Always speak as if you were chatting to a friend.
        `,
      },
      {
        role: "user",
        content: `
          **Context**: ${context}
          **Query**: ${query}
        `,
      },
    ],
  });

  return response.output_text;
};
