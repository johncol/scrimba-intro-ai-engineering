import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(process.env.HUGGING_FACE_ACCESS_TOKEN);

const response = await client.translation({
  provider: "hf-inference",
  model: "facebook/mbart-large-50-many-to-many-mmt",
  inputs: "I'm John and I live in Disneyland",
  parameters: {
    src_lang: "en_XX",
    tgt_lang: "es_XX",
  }
})

console.log(response);
