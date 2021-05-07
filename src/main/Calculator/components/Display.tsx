import React, { FC, useContext } from "react";
import { CalculatorContext } from "../../../contexts/calculator/provider";

const Display: FC = () => {
  const { state } = useContext(CalculatorContext);
  const { display } = state;
  return <div className="display">{display}</div>;
};

export default Display;
