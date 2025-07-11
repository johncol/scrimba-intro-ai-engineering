"use client";

import { useState } from "react";
import styles from "./stock-predictions.module.css";
import { TickerSelector } from "./ticker-selector/ticker-selector";
import { TickerList } from "./tickers-list/tickers-list";
import Form from "next/form";

interface StockPredictionsProps {
  onSubmitAction: (formData: FormData) => Promise<void>;
}

export const StockPredictions = ({ onSubmitAction }: StockPredictionsProps) => {
  const [tickers, setTickers] = useState<string[]>([]);

  const onAddTicker = (ticker: string) => {
    setTickers((prev) => {
      if (prev.includes(ticker)) {
        return prev;
      }
      return [...prev, ticker];
    });
  };

  const onRemoveTicker = (ticker: string) => {
    setTickers((prev) =>
      prev.filter((existingTicker) => existingTicker !== ticker)
    );
  };

  return (
    <Form action={onSubmitAction}>
      <main className={styles.main}>
        <div className={styles.content}>
          <h1>Stock Predictions</h1>
          <p>
            This is a stock prediction app that uses AI to predict the future
            price of a stock. Don&apos;t trust it though. I mean.. if you want,
            but don&apos;t blame me afterwards.
          </p>

          <TickerSelector onAddTicker={onAddTicker} />
          <TickerList tickers={tickers} onRemoveTicker={onRemoveTicker} />
          {tickers.map((ticker) => (
            <input key={ticker} type="hidden" name="tickers" value={ticker} />
          ))}

          <button className={styles.button} type="submit">
            Predict
          </button>
        </div>
      </main>
    </Form>
  );
};
