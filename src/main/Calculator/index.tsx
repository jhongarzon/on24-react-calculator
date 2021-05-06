import React, { FC } from "react";
import Display from "./components/Display";
import CalculatorContainer from "./containers/CalculatorContainer";
import { CalculatorProps } from "./types";

const Calculator: FC<CalculatorProps> = (props: CalculatorProps) => {
  return (
    <div className="calc-container">
      <Display></Display>
      <CalculatorContainer></CalculatorContainer>
    </div>
  );
};

export default Calculator;
