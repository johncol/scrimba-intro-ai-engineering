import { getMoviesDataFromFile } from "./getMoviesDataFromFile.mjs";
import { getChunks } from "./getChunks.mjs";
import { getEmbeddings } from "./getEmbeddings.mjs";
import { storeEmbeddings } from "./storeEmbeddings.mjs";

const EMBEDDINGS_ALREADY_INITIALIZED = true;

export const initAppDomain = async () => {
  if (EMBEDDINGS_ALREADY_INITIALIZED) {
    return;
  }

  console.log("Initializing app..");
  const movies = getMoviesDataFromFile();
  const promises = movies.map(async (movie) => {
    const chunks = await getChunks(movie);
    const embeddings = await getEmbeddings(chunks);
    await storeEmbeddings(embeddings);
  });
  const results = await Promise.allSettled(promises);
  console.log(
    `App initialization complete! ${results.length} movies embedded in Supabase`
  );
};
