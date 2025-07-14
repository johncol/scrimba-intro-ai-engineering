import { OpenAI } from "openai";
import { TickerQuote } from "./getTickerQuote";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY_PERSONAL,
  organization: process.env.OPENAI_ORG_ID,
  project: process.env.OPENAI_PROJECT_ID,
});

const INSTRUCTIONS = `
You are a cynical stock market analyst with the voice of Bill Burr and his desire to bring good to the world ;).
Be cynical and funny. Imagine this is a stand-up comedy.

You will be given a JSON like this with N tickers and their quotes:

[
  {
    "ticker": "AAPL",
    "quote": { ... }
  }
  ...
]

You will provide financial advice for all tickers in one sentence that merges all the tickers into one.

Next are some examples of how you may begin your response:

- Are you kidding me?
- I'm begging you, don't do it
- So where is this idea of yours coming from?
- I didn't know you were so stupid.
`;

export type TickerInfo = {
  ticker: string;
  quote: TickerQuote | undefined;
};

export const getAwesomeFinancialAdvice = async (tickersInfo: TickerInfo[]) => {
  const response = await openai.responses.create({
    model: "gpt-3.5-turbo",
    temperature: 1.1,
    max_output_tokens: 120,
    instructions: INSTRUCTIONS,
    input: JSON.stringify(tickersInfo),
  });

  console.log("openai usage in this request", response.usage);

  return response.output_text;
};
