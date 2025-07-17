-- https://supabase.com/blog/openai-embeddings-postgres-vector

create extension vector;

create table documents (
  id bigserial primary key,
  content text,
  embedding vector(1536)
);
