export type TickerResult = {
  ticker: string;
  info: Record<string, unknown> | null;
  success: boolean;
};
