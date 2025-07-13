import { restClient } from "@polygon.io/client-js";

const polygonIO = restClient(process.env.POLYGON_IO_API_KEY);

export const getTickerInfo = async (ticker: string) => {
  try {
    return await polygonIO.reference.tickerDetails(ticker, {});
  } catch (error) {
    console.error("An error happened:", error);
    return null;
  }
};
