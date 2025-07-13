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
`;

export type TickerInfo = {
  ticker: string;
  quote: TickerQuote | undefined;
};

export const getAwesomeFinancialAdvice = async (tickersInfo: TickerInfo[]) => {
  const response = await openai.responses.create({
    model: "gpt-3.5-turbo",
    instructions: INSTRUCTIONS,
    input: JSON.stringify(tickersInfo),
  });

  return response.output_text;
};
