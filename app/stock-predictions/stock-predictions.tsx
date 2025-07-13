"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import styles from "./stock-predictions.module.css";
import { TickerSelector } from "./ticker-selector/ticker-selector";
import { TickerList } from "./tickers-list/tickers-list";
import Form from "next/form";

const MAX_TICKERS = 3;

interface StockPredictionsProps {
  onSubmitAction: (formData: FormData) => Promise<string>;
}

export const StockPredictions = ({ onSubmitAction }: StockPredictionsProps) => {
  const [tickers, setTickers] = useState<string[]>([]);
  const [prediction, setPrediction] = useState<string>("");

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

  const onSubmit = async (formData: FormData) => {
    const prediction = await onSubmitAction(formData);
    setPrediction(prediction);
  };

  return (
    <Form action={onSubmit}>
      <main className={styles.main}>
        <div className={styles.content}>
          <h1>Stock Predictions</h1>
          <p>
            This is a stock prediction app that uses AI to predict the future
            price of a stock. Don&apos;t trust it though. I mean.. if you want,
            but don&apos;t blame me afterwards.
          </p>

          <TickerSelector onAddTicker={onAddTicker} disabled={tickers.length >= MAX_TICKERS} />
          <TickerList tickers={tickers} onRemoveTicker={onRemoveTicker} />
          {tickers.map((ticker) => (
            <input key={ticker} type="hidden" name="tickers" value={ticker} />
          ))}

          <SubmitButton tickers={tickers} />

          <Prediction prediction={prediction} />
        </div>
      </main>
    </Form>
  );
};

const SubmitButton: React.FC<{ tickers: string[] }> = ({ tickers }) => {
  const { pending } = useFormStatus();

  return (
    <button className={styles.submitButton} type="submit" disabled={pending || tickers.length === 0}>
      {pending ? "Predicting..." : "Predict"}
    </button>
  );
};

const Prediction = ({ prediction }: { prediction: string }) => {
  if (prediction.length === 0) {
    return null;
  }

  return <p className={styles.predictionCard}>{prediction}</p>;
};
