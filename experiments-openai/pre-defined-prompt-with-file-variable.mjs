import OpenAI from "openai";
import fs from "fs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY_PERSONAL,
});

const file = await openai.files.create({
  purpose: "user_data",
  file: fs.createReadStream("./experiments/resume.pdf"),
})

const response = await openai.responses.create({
  prompt: {
    "id": "pmpt_68754bd0dc848190b5aa8da544e6710c0ab27ed5156cd1e3",
    "version": "4",
    variables: {
      "resume": {
        type: "input_file",
        file_id: file.id,
      },
    }
  }
});

const output = response.output_text;
console.log(output);
