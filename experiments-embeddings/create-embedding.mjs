import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY_PERSONAL,
});

const content = [
  "I have two dogs, Alana and Eli",
  "Alana is a mix of Australian Labradoodle",
  "Eli is a mix of Terrier and Schnauzer",
];

const getEmbeddings = async (content = [], debug = false) => {
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

  const result = data.map(({ index, embedding }) => {
    return { content: content[index], embedding };
  });

  return result;
};

const embeddings = await getEmbeddings(content);

console.log(embeddings);
