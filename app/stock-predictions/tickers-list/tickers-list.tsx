import styles from "./tickers-list.module.css";

export const TickerList: React.FC<{
  tickers: string[];
  onRemoveTicker: (ticker: string) => void;
}> = ({ tickers, onRemoveTicker }) => {
  return (
    <ul className={styles.tickersList}>
      {tickers.map((ticker) => (
        <li key={ticker}>
          {ticker}
          <button onClick={() => onRemoveTicker(ticker)} aria-label="Remove">
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
};
