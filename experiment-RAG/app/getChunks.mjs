import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

export const getChunks = async (string) => {
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 240,
    chunkOverlap: 36,
  });


  const chunks = await splitter.createDocuments([string]);
  return chunks.map((chunk) => chunk.pageContent);
};
