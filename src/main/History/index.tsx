import React, { FC, useContext } from "react";
import { CalculatorContext } from "../../contexts/calculator/provider";
import HistoryHeader from "./components/HistoryHeader";
import HistoryItem from "./components/HistoryItem";

type HistoryProps = {};
const History: FC<HistoryProps> = ({}: HistoryProps) => {
  const { state } = useContext(CalculatorContext);
  const { history } = state;
  return (
    <div>
      <h2>History</h2>
      <HistoryHeader></HistoryHeader>
      {history.map((elem, index) => {
        return (
          <HistoryItem key={index} index={index + 1} item={elem}></HistoryItem>
        );
      })}
    </div>
  );
};
export default History;
