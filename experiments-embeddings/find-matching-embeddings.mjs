import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey);

export const findMatchingEmbeddings = async (query, threshold = 0.5, count = 3) => {
  const { data, error } = await supabase.rpc("match_documents", {
    query_embedding: query,
    match_threshold: threshold,
    match_count: count,
  });

  if (error) {
    console.error("An error occurred while finding similar embeddings");
    console.error(error);
    return null;
  }

  return data;
}
