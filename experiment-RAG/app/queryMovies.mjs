import { getEmbeddings } from "./getEmbeddings.mjs";
import { getMatchingEmbeddings } from "./getMatchingEmbeddings.mjs";
import { getResponseToQuery } from "./getResponseToQuery.mjs";

export const queryMovies = async (query) => {
  const queryEmbedding = (await getEmbeddings([query]))[0];
  console.log("queryEmbedding", queryEmbedding)

  const matchingEmbeddings = await getMatchingEmbeddings(queryEmbedding);
  console.log("matchingEmbeddings", matchingEmbeddings)

  const queryResponse = await getResponseToQuery(query, matchingEmbeddings);

  return queryResponse;
};
