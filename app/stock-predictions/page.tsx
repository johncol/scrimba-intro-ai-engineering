"use server";

import { onSubmitAction } from "./actions/onSubmitAction";
import { StockPredictions } from "./stock-predictions";

export default async function Page() {
  return <StockPredictions onSubmitAction={onSubmitAction} />;
}
