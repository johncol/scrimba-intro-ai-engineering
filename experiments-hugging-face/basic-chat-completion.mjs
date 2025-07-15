import { InferenceClient,  } from "@huggingface/inference";

const client = new InferenceClient(process.env.HUGGING_FACE_ACCESS_TOKEN);

const response = await client.chatCompletion({
  model: "deepseek-ai/DeepSeek-V3-0324",
  messages: [
    {
      role: "user",
      content: "What's the capital city of Alaska?",
    }
  ],
})

const responseContent = response.choices[0]?.message.content;
console.log(responseContent);
