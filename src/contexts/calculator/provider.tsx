import React, { FC, createContext, useReducer } from "react";
import calculatorReducer from "./reducer";
import { CalculatorState, initialCalculatorState } from "./types";

const CalculatorContext = createContext<{
  state: CalculatorState;
  dispatch: React.Dispatch<any>;
}>({ state: initialCalculatorState, dispatch: () => null });

type CalculatorProviderProps = {
  children: React.ReactNode;
};
const CalculatorProvider: FC<CalculatorProviderProps> = ({
  children,
}: CalculatorProviderProps) => {
  const [state, dispatch] = useReducer(
    calculatorReducer,
    initialCalculatorState
  );

  return (
    <CalculatorContext.Provider value={{ state, dispatch }}>
      {children}
    </CalculatorContext.Provider>
  );
};
export { CalculatorContext };
export default CalculatorProvider;
