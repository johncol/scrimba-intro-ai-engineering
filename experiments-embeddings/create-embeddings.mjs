import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY_PERSONAL,
});

export const createEmbeddings = async (content = [], debug = false) => {
  const { data } = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: content,
    encoding_format: "float",
  });

  if (debug) {
    console.log(`How many embeddings did we get? ${data.length}`);
    console.log(`What's the vector size of each embedding?`);
    data.forEach(({ index, embedding }) => {
      console.log(`Embedding ${index}: ${embedding.length}`);
    });
  }

  if (typeof content === 'string') {
    return [{
      content,
      embedding: data[0].embedding,
    }]
  }

  return data.map(({ index, embedding }) => {
    return {
      content: content[index],
      embedding,
    };
  });
};
