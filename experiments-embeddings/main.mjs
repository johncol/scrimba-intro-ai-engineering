import { content } from "./content.mjs";
import { createEmbeddings } from "./create-embeddings.mjs";
import { findSimilarEmbeddings } from "./find-similar-embeddings.mjs";
import { storeEmbeddings } from "./store-embeddings.mjs";

const phase = "find-similar-embeddings";

if (phase === "create-embeddings") {
  const embeddings = await createEmbeddings(content);
  const dbResult = await storeEmbeddings(embeddings);

  console.log(dbResult);
}

if (phase === "find-similar-embeddings") {
  const query = "What are my dogs names?";
  const { embedding } = (await createEmbeddings(query))[0];
  const results = await findSimilarEmbeddings(embedding, 0.5, 1);
  console.log(results);
}
