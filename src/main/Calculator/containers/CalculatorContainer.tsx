import React, {
  FC,
  MouseEventHandler,
  SyntheticEvent,
  useContext,
} from "react";
import CalcButton from "../components/CalcButton";
import { ButtonType } from "../types";
import { CalculatorContext } from "../../../contexts/calculator/provider";
import {
  add,
  divide,
  multiply,
  subtract,
  input,
  equal,
  clear,
} from "../../../contexts/calculator/reducer";

const CalculatorContainer: FC = () => {
  const { dispatch } = useContext(CalculatorContext);
  const handleOperation = (e: SyntheticEvent) => {
    e.preventDefault();
    const operation = e.currentTarget as HTMLInputElement;
    console.log(`Operation: ${operation.value}`);
    switch (operation.value) {
      case "+":
        dispatch(add());
        break;
      case "-":
        dispatch(subtract());
        break;
      case "*":
        dispatch(multiply());
        break;
      case "/":
        dispatch(divide());
        break;
      case "=":
        dispatch(equal());
        break;
      case "clear":
        dispatch(clear());
        break;
    }
  };
  const handleInput = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLInputElement;
    const value = parseFloat(target.value);
    dispatch(input(value));
  };
  return (
    <div className="calc-keypad">
      <CalcButton
        label="C"
        value="clear"
        onClick={handleOperation}
      ></CalcButton>
      <CalcButton
        label="÷"
        value="/"
        type={ButtonType.operation}
        onClick={handleOperation}
      ></CalcButton>

      <CalcButton
        label="x"
        value="*"
        type={ButtonType.operation}
        onClick={handleOperation}
      ></CalcButton>
      <CalcButton
        value="-"
        type={ButtonType.operation}
        onClick={handleOperation}
      ></CalcButton>

      <CalcButton value="7" onClick={handleInput}></CalcButton>
      <CalcButton value="8" onClick={handleInput}></CalcButton>
      <CalcButton value="9" onClick={handleInput}></CalcButton>
      <CalcButton
        value="+"
        type={ButtonType.operation}
        onClick={handleOperation}
        customClass="two-rows"
      ></CalcButton>

      <CalcButton value="4" onClick={handleInput}></CalcButton>
      <CalcButton value="5" onClick={handleInput}></CalcButton>
      <CalcButton value="6" onClick={handleInput}></CalcButton>

      <CalcButton value="1" onClick={handleInput}></CalcButton>
      <CalcButton value="2" onClick={handleInput}></CalcButton>
      <CalcButton value="3" onClick={handleInput}></CalcButton>
      <CalcButton
        value="="
        type={ButtonType.operation}
        onClick={handleOperation}
        customClass="two-rows"
      ></CalcButton>
      <CalcButton
        value="0"
        onClick={handleInput}
        customClass="three-columns"
      ></CalcButton>
    </div>
  );
};

export default CalculatorContainer;
