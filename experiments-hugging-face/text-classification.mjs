import { InferenceClient,  } from "@huggingface/inference";

const client = new InferenceClient(process.env.HUGGING_FACE_ACCESS_TOKEN);

const response = await client.textClassification({
  model: "distilbert/distilbert-base-uncased-finetuned-sst-2-english",
  inputs: "I'm so happy today!",
})

console.log(response);
