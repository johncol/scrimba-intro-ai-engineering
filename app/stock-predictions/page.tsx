"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { TickerSelector } from "./ticker-selector/ticker-selector";
import { TickerList } from "./tickers-list/tickers-list";
import { getTickerInfo } from "./api/getTickerInfo";

export default function Page() {
  return <StockPredictions />;
}

const StockPredictions = () => {
  const [tickers, setTickers] = useState<string[]>([]);

  const onAddTicker = (ticker: string) => {
    getTickerInfo(ticker).then(console.log);
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
        <button className={styles.predictButton}>Predict</button>
      </div>
    </main>
  );
};
