import { content } from "./content.mjs";
import { createEmbeddings } from "./create-embeddings.mjs";
import { findMatchingEmbeddings } from "./find-matching-embeddings.mjs";
import { generateNaturalLanguageResponse } from "./generate-natural-language-response.mjs";
import { storeEmbeddings } from "./store-embeddings.mjs";

const phase = "get-natural-language-response";

if (phase === "create-embeddings") {
  const embeddings = await createEmbeddings(content);
  const dbResult = await storeEmbeddings(embeddings);
  console.log(dbResult);
}

if (phase === "find-similar-embeddings") {
  const query = "What are my dogs names?";
  const { embedding } = (await createEmbeddings(query))[0];
  const matchingEmbeddings = await findMatchingEmbeddings(embedding, 0.5, 1);
  console.log(matchingEmbeddings);
}

if (phase === "get-natural-language-response") {
  const query = "Do I have a terrier?";
  const { embedding } = (await createEmbeddings(query))[0];
  const matchingEmbeddings = await findMatchingEmbeddings(embedding, 0.3, 3);
  const matchingContent = matchingEmbeddings.map(embedding => embedding.content).join('\n');
  console.log("matchingContent:\n", matchingContent)
  const response = await generateNaturalLanguageResponse(matchingContent, query)
  console.log("response:\n", response)
}
