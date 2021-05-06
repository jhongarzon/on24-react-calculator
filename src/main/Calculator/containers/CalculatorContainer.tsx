import React, { FC, useEffect } from "react";
import CalcButton from "../components/CalcButton";
import { ButtonType } from "../types";

const CalculatorContainer: FC = () => {
  return (
    <div className="calc-keypad">
      <CalcButton label="AC" value="clear"></CalcButton>
      <CalcButton label="<-" value="<-"></CalcButton>
      <CalcButton value="%"></CalcButton>
      <CalcButton label="÷" value="/" type={ButtonType.operation}></CalcButton>

      <CalcButton value="7"></CalcButton>
      <CalcButton value="8"></CalcButton>
      <CalcButton value="9"></CalcButton>
      <CalcButton label="x" value="*" type={ButtonType.operation}></CalcButton>

      <CalcButton value="4"></CalcButton>
      <CalcButton value="5"></CalcButton>
      <CalcButton value="6"></CalcButton>
      <CalcButton value="-" type={ButtonType.operation}></CalcButton>

      <CalcButton value="1"></CalcButton>
      <CalcButton value="2"></CalcButton>
      <CalcButton value="3"></CalcButton>
      <CalcButton value="+" type={ButtonType.operation}></CalcButton>

      <CalcButton value="0"></CalcButton>
      <CalcButton value="9"></CalcButton>
      <CalcButton value="=" type={ButtonType.operation}></CalcButton>
    </div>
  );
};

export default CalculatorContainer;
