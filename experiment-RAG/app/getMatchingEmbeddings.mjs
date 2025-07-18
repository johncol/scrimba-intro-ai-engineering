import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_API_KEY = process.env.SUPABASE_API_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);

export const getMatchingEmbeddings = async (
  { embedding },
  functionName = "match_movie_documents"
) => {
  const {
    data: rows,
    error,
    statusText,
    count,
  } = await supabase.rpc(functionName, {
    query_embedding: embedding,
    match_threshold: 0.3,
    match_count: 5,
  });

  console.log("Supabase rpc status:", statusText);

  if (error) {
    console.log("Supabase failed to invoke RPC. Error:", error);
  }

  console.log(`${count} embeddings matched`);

  return rows;
};
