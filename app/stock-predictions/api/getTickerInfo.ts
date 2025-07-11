import { restClient } from "@polygon.io/client-js";

const rest = restClient(process.env.POLYGON_IO_API_KEY);

export const getTickerInfo = async (ticker: string) => {
  try {
    return await rest.reference.tickerDetails(ticker, {});
  } catch (error) {
    console.error("An error happened:", error);
    return null;
  }
};
