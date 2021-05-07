import React, { FC, useContext } from "react";
import { CalculatorContext } from "~/contexts/calculator/provider";
import { History } from "~/contexts/calculator/types";

type HistoryItemProps = {
  index: number;
  item: History;
};
const HistoryItem: FC<HistoryItemProps> = ({
  index,
  item,
}: HistoryItemProps) => {
  const rowClass = index % 2 == 0 ? "row" : "alternate-row";
  return (
    <div className={`history-item ${rowClass}`}>
      <div>{`${index}: `}</div>
      <div>{item.left}</div>
      <div>{item.operator}</div>
      <div>{item.right}</div>
      <div>=</div>
      <div>{item.subTotal}</div>
    </div>
  );
};
export default HistoryItem;
