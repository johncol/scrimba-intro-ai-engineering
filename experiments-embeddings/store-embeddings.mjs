import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey);

export const storeEmbeddings = async (embeddings = []) => {
  const { error } = await supabase.from("documents").insert(embeddings);

  if (error) {
    console.error("An error occurred while storing embeddings");
    console.error(error);
    return null;
  }

  return data;
};
