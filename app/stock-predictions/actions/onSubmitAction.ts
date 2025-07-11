"use server";

import { getTickerInfo } from "../api/getTickerInfo";
import { TickerResult } from "../types";

export const onSubmitAction = async (formData: FormData): Promise<void> => {
  const tickers = formData.getAll("tickers") as string[];

  if (tickers.length === 0) {
    return;
  }

  try {
    const results: TickerResult[] = await Promise.all(
      tickers.map(async (ticker) => {
        const info = await getTickerInfo(ticker);
        return {
          ticker,
          info: info?.results || null,
          success: !!info,
        };
      })
    );

    console.log("Processed tickers:", results);
  } catch (error) {
    console.error("Error processing tickers:", error);
  }
};
