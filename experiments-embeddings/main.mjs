import { content } from "./content.mjs";
import { createEmbeddings } from "./create-embeddings.mjs";
import { storeEmbeddings } from "./store-embeddings.mjs";

const embeddings = await createEmbeddings(content);
const dbResult = await storeEmbeddings(embeddings);

console.log(dbResult);
