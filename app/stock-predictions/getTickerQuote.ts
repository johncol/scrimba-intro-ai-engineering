const API = "api/v1/quote";
const BASE_URL = process.env.FINNHUB_BASE_URL;
const API_KEY = process.env.FINNHUB_API_KEY;

export type TickerQuote = {
  c: number;
  d: number;
  dp: number;
  h: number;
  l: number;
};

export const getTickerQuote = async (
  ticker: string
): Promise<TickerQuote | undefined> => {
  const url = `${BASE_URL}/${API}?symbol=${ticker}&token=${API_KEY}`;
  console.log("url", url);

  const response = await fetch(url);
  if (!response.ok) {
    console.error(`Failed to fetch quote for ${ticker}`);
    return undefined;
  }

  return await response.json();
};
