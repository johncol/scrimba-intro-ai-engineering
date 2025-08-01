"use server";

import {
  getAwesomeFinancialAdvice,
  TickerInfo,
} from "../api/getAwesomeFinancialAdvice";

import { getTickerQuote } from "../api/getTickerQuote";

export const onSubmitAction = async (formData: FormData): Promise<string> => {
  const tickers = formData.getAll("tickers") as string[];

  if (tickers.length === 0) {
    return "No tickers provided";
  }

  try {
    const tickersInfo: TickerInfo[] = await Promise.all(
      tickers.map(async (ticker) => {
        const quote = await getTickerQuote(ticker);
        return { ticker, quote };
      })
    );
    console.log("Tickers info:", tickersInfo);
    
    const prediction = await getAwesomeFinancialAdvice(tickersInfo);

    console.log("Tickers prediction:", prediction);
    return prediction;
  } catch (error) {
    console.error("Error processing tickers:", error);
    return "Error processing tickers";
  }
};
