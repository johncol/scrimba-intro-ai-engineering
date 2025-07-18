import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY_PERSONAL,
  logLevel: "warn",
});

export const getEmbeddings = async (chunks = []) => {
  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: chunks,
  });

  const embeddings = chunks.map((chunk, index) => {
    const chunkResult = response.data[index];

    if (chunkResult.index !== index) {
      throw new Error(
        "My assumption about openai.embeddings API data response matching the order/value of the field index is incorrect"
      );
    }

    return {
      content: chunk,
      embedding: chunkResult.embedding,
    };
  });

  return embeddings;
};
