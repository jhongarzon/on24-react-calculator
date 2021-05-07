import { hot } from "react-hot-loader";
import React, { FC, SyntheticEvent, useState } from "react";
import Calculator from "./main/Calculator";
import CalculatorProvider from "./contexts/calculator/provider";
import ToogleHistory from "./main/History/components/ToogleHistory";
import History from "./main/History";

const App: FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleChange = (checked: boolean): void => {
    setIsChecked(checked);
  };
  return (
    <div>
      <CalculatorProvider>
        <ToogleHistory
          isChecked={isChecked}
          handleChange={handleChange}
        ></ToogleHistory>
        {isChecked ? <History></History> : <Calculator></Calculator>}
      </CalculatorProvider>
    </div>
  );
};

export default hot(module)(App);
