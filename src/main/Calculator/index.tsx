import React, { FC } from "react";
import Display from "./components/Display";
import CalculatorContainer from "./containers/CalculatorContainer";

const Calculator: FC = () => {
  return (
    <div>
      <div className="calc-title">Calculator</div>
      <div className="calc-container">
        <Display></Display>
        <CalculatorContainer></CalculatorContainer>
      </div>
    </div>
  );
};

export default Calculator;
