import { useState } from "react";
import styles from "./ticker-selector.module.css";

const MAX_LENGTH = 5;

export const TickerSelector: React.FC<{
  onAddTicker: (ticker: string) => void;
}> = ({ onAddTicker }) => {
  const [ticker, setTicker] = useState("");

  return (
    <div className={styles.tickerSelector}>
      <label htmlFor="ticker">Ticker</label>
      <input
        type="text"
        id="ticker"
        list="tickers"
        value={ticker}
        onChange={(event) => {
          const value = event.target.value
            ?.toUpperCase()
            ?.substring(0, MAX_LENGTH);
          setTicker(value ?? "");
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            onAddTicker(ticker);
            setTicker("");
          }
        }}
      />
      <datalist id="tickers">
        <option value="AAPL">Apple</option>
        <option value="GOOG">Google</option>
        <option value="MSFT">Microsoft</option>
        <option value="AMZN">Amazon</option>
        <option value="TSLA">Tesla</option>
      </datalist>
    </div>
  );
};
