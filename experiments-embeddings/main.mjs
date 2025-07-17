import { content } from "./content.mjs";
import { createEmbeddings } from "./create-embeddings.mjs";

const embeddings = await createEmbeddings(content);

console.log(embeddings);
